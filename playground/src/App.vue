<template>
  <main class="playground">
    <section class="editor-panel">
      <h1>Everybody UI Playground</h1>
      <p>支持 SFC 在线编辑、模板切换、错误查看和分享链接。</p>

      <label class="demo-picker">
        <span>模板</span>
        <select v-model="activeDemoId" @change="handleDemoChange">
          <option v-for="demo in replDemos" :key="demo.id" :value="demo.id">
            {{ demo.label }}
          </option>
        </select>
      </label>
      <p class="demo-description">{{ activeDemo?.description }}</p>

      <label>
        <span>App.vue</span>
        <textarea v-model="sfcCode" spellcheck="false" />
      </label>

      <div class="actions">
        <button type="button" @click="resetToDefault">恢复默认代码</button>
        <button type="button" @click="copyShareLink">复制分享链接</button>
      </div>
      <p v-if="shareTip" class="hint">{{ shareTip }}</p>
    </section>

    <section class="preview-panel">
      <h2>预览</h2>
      <div class="preview-canvas">
        <PreviewRunner :comp="previewComponent" />
      </div>

      <section class="error-panel">
        <h3>错误面板</h3>
        <p v-if="!compileError && !runtimeError" class="hint">暂无错误</p>
        <pre v-if="compileError" class="error-block">[编译错误]\n{{ compileError }}</pre>
        <pre v-if="runtimeError" class="error-block">[运行时错误]\n{{ runtimeError }}</pre>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import {
  computed,
  defineComponent,
  h,
  markRaw,
  onErrorCaptured,
  ref,
  watch,
  type Component
} from 'vue'
import { compileScript, compileStyle, compileTemplate, parse } from '@vue/compiler-sfc'
import ts from 'typescript'
import { replDemoMap, replDemos } from './lib/replDemos'

const FALLBACK_DEMO_ID = replDemos[0].id
const activeDemoId = ref(FALLBACK_DEMO_ID)
const sfcCode = ref('')
const previewComponent = ref<Component | null>(null)
const compileError = ref('')
const runtimeError = ref('')
const shareTip = ref('')

const PreviewRunner = defineComponent({
  name: 'PreviewRunner',
  props: {
    comp: {
      type: Object,
      default: null
    }
  },
  setup(props) {
    onErrorCaptured((err) => {
      runtimeError.value = err instanceof Error ? `${err.message}\n${err.stack ?? ''}` : String(err)
      return false
    })

    return () => {
      if (!props.comp) {
        return h('div', { class: 'empty' }, '等待代码编译...')
      }
      return h(props.comp as Component)
    }
  }
})

const activeDemo = computed(() => replDemoMap[activeDemoId.value] ?? replDemoMap[FALLBACK_DEMO_ID])


function normalizeSfcSource(source: string) {
  const hasTableTag = /<\/?EbcustomTable|<\/?EbCustomTable|<\/?eb-custom-table/.test(source)

  let normalized = source
    .replace(/<EbcustomTable/g, '<eb-custom-table')
    .replace(/<EbCustomTable/g, '<eb-custom-table')
    .replace(/<\/EbcustomTable>/g, '</eb-custom-table>')
    .replace(/<\/EbCustomTable>/g, '</eb-custom-table>')

  if (hasTableTag && !normalized.includes('EbCustomTable') && normalized.includes('<script setup')) {
    normalized = normalized.replace(
      /<script\s+setup[^>]*>/,
      (matched) => `${matched}
import { EbcustomTable as EbCustomTable } from 'everybody-ui'`
    )
  }

  return normalized
}

function decodeBase64(value: string) {
  try {
    return decodeURIComponent(escape(atob(value)))
  } catch {
    return ''
  }
}

function encodeBase64(value: string) {
  return btoa(unescape(encodeURIComponent(value)))
}

function rewriteImports(code: string) {
  const origin = window.location.origin
  const aliasMap: Record<string, string> = {
    vue: `${origin}/src/lib/runtime/vue.ts`,
    'element-plus': `${origin}/src/lib/runtime/element-plus.ts`,
    'everybody-ui': `${origin}/src/lib/runtime/everybody-ui.ts`
  }

  return code
    .replace(/from\s+['"]([^'"]+)['"]/g, (full, specifier) => {
      if (aliasMap[specifier]) {
        return `from '${aliasMap[specifier]}'`
      }
      return full
    })
    .replace(/import\s+['"]([^'"]+)['"]/g, (full, specifier) => {
      if (aliasMap[specifier]) {
        return `import '${aliasMap[specifier]}'`
      }
      return full
    })
}


function patchTsxCustomDirectives(code: string) {
  return code.replace(
    /<([A-Za-z][\w]*)\s+v-([\w-]+)=\{\{([\s\S]*?)\}\}\s*><\/\1>/g,
    (_, tag: string, directive: string, expression: string) => {
      return `withDirectives(<${tag}></${tag}>, [[resolveDirective('${directive}')!, {${expression.trim()}}]])`
    }
  )
}

let styleEl: HTMLStyleElement | null = null

function mountStyles(cssText: string) {
  if (styleEl) {
    styleEl.remove()
    styleEl = null
  }

  if (!cssText.trim()) return

  styleEl = document.createElement('style')
  styleEl.setAttribute('data-playground-style', 'true')
  styleEl.textContent = cssText
  document.head.appendChild(styleEl)
}

async function compileAndRun() {
  compileError.value = ''
  runtimeError.value = ''

  try {
    const normalizedSource = normalizeSfcSource(sfcCode.value)
    const descriptor = parse(normalizedSource, { filename: 'PlaygroundDemo.vue' }).descriptor
    const id = 'playground-demo'
    const script = compileScript(descriptor, { id })

    let code = script.content.replace(/export\s+default/, 'const __sfc__ =')

    if (descriptor.template) {
      const template = compileTemplate({
        id,
        source: descriptor.template.content,
        filename: 'PlaygroundDemo.vue',
        compilerOptions: {
          bindingMetadata: script.bindings
        }
      })

      if (template.errors.length) {
        throw new Error(template.errors.map((error) => String(error)).join('\n'))
      }

      code += `\n${template.code}\n__sfc__.render = render\nexport default __sfc__`
    } else {
      code += '\nexport default __sfc__'
    }

    const mergedCss = descriptor.styles
      .map((style, index) => {
        const styleResult = compileStyle({
          filename: 'PlaygroundDemo.vue',
          id,
          source: style.content,
          scoped: style.scoped,
          preprocessLang: style.lang as 'css' | 'scss' | 'sass' | 'less' | 'styl' | undefined
        })
        if (styleResult.errors.length) {
          throw new Error(styleResult.errors.map((error) => String(error)).join('\n'))
        }
        return `/* style-${index} */\n${styleResult.code}`
      })
      .join('\n')

    mountStyles(mergedCss)

    const rewritten = rewriteImports(code)
    const jsxReadyCode = patchTsxCustomDirectives(rewritten)
    const withVueJsxRuntime = `import { h, Fragment, resolveDirective, withDirectives } from '${window.location.origin}/src/lib/runtime/vue.ts'
${jsxReadyCode}`
    const transpiled = ts.transpileModule(withVueJsxRuntime, {
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2020,
        jsx: ts.JsxEmit.React,
        jsxFactory: 'h',
        jsxFragmentFactory: 'Fragment'
      }
    }).outputText

    const blob = new Blob([transpiled], { type: 'text/javascript' })
    const url = URL.createObjectURL(blob)

    try {
      const loaded = await import(/* @vite-ignore */ url)
      previewComponent.value = markRaw(loaded.default)
    } finally {
      URL.revokeObjectURL(url)
    }
  } catch (error) {
    previewComponent.value = null
    compileError.value = error instanceof Error ? `${error.message}\n${error.stack ?? ''}` : String(error)
  }
}

function handleDemoChange() {
  sfcCode.value = activeDemo.value.code
}

function resetToDefault() {
  sfcCode.value = activeDemo.value.code
}

async function copyShareLink() {
  const url = new URL(window.location.href)
  url.searchParams.set('demo', activeDemoId.value)
  url.searchParams.set('code', encodeBase64(sfcCode.value))

  try {
    await navigator.clipboard.writeText(url.toString())
    shareTip.value = '分享链接已复制'
  } catch {
    shareTip.value = `复制失败，请手动复制：${url.toString()}`
  }
}

function initFromUrl() {
  const search = new URLSearchParams(window.location.search)
  const demo = search.get('demo')
  const code = decodeBase64(search.get('code') ?? '')

  if (demo && replDemoMap[demo]) {
    activeDemoId.value = demo
  }

  sfcCode.value = code || activeDemo.value.code
}

watch(sfcCode, () => {
  compileAndRun()
})

initFromUrl()
compileAndRun()
</script>

<style scoped>
.playground {
  display: grid;
  grid-template-columns: minmax(420px, 560px) minmax(680px, 1fr);
  gap: 20px;
  min-height: 100vh;
  padding: 20px;
  background: #f5f7fa;
}

.editor-panel,
.preview-panel {
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
}

.demo-picker select {
  margin-top: 6px;
  width: 100%;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  padding: 8px 10px;
}

.demo-description {
  margin: 4px 0 10px;
  color: #606266;
}

label {
  display: block;
  margin: 12px 0;
}

label span {
  font-size: 12px;
  color: #606266;
  text-transform: uppercase;
}

textarea {
  width: 100%;
  min-height: 480px;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  padding: 10px;
  margin-top: 6px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  font-size: 12px;
  line-height: 1.55;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

button {
  border: 1px solid #409eff;
  background: #409eff;
  color: #fff;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
}

.preview-canvas {
  min-height: 320px;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  padding: 12px;
  background: #fff;
}

.error-panel {
  margin-top: 14px;
}

.error-block {
  margin-top: 8px;
  background: #fff2f0;
  border: 1px solid #ffccc7;
  color: #cf1322;
  border-radius: 6px;
  padding: 10px;
  white-space: pre-wrap;
  font-size: 12px;
}

.hint {
  color: #67c23a;
}

.empty {
  color: #909399;
}
</style>
