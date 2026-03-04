<template>
  <main class="playground">
    <section class="editor-panel">
      <h1>Everybody UI Playground</h1>
      <p>支持通过 URL 注入 template / script / style，并自动回填到编辑器。</p>

      <label>
        <span>template</span>
        <textarea v-model="templateCode" spellcheck="false" />
      </label>

      <label>
        <span>script</span>
        <textarea v-model="scriptCode" spellcheck="false" />
      </label>

      <label>
        <span>style</span>
        <textarea v-model="styleCode" spellcheck="false" />
      </label>

      <div class="actions">
        <button type="button" @click="resetFromUrl">重置为 URL 示例</button>
      </div>
      <p v-if="activeDemoId" class="hint">当前示例 ID：{{ activeDemoId }}</p>
      <p v-else class="error">未命中示例映射，当前仅展示源码，不渲染预览。</p>
    </section>

    <section class="preview-panel">
      <component :is="activeComponent" v-if="activeComponent" />
      <div v-else class="empty">请通过文档页的 Open in Playground 按钮打开示例。</div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import DemoTransition from '../../docs/Directives/NumTransition/DemoTransition.vue'
import DemoTransitionFormat from '../../docs/Directives/NumTransition/DemoTransitionFormat.vue'
import EBCustomTableBase from '../../docs/components/customTable/EBcustomTableBase.vue'
import EBCustomTableTooltip from '../../docs/components/customTable/EBcustomTableTooltip.vue'
import { demoSourceMap, type DemoSourceId } from './lib/demoSourceMap'

const demoComponentMap: Record<DemoSourceId, unknown> = {
  customTableBase: EBCustomTableBase,
  customTableTooltip: EBCustomTableTooltip,
  numTransitionBase: DemoTransition,
  numTransitionFormat: DemoTransitionFormat
}

const templateCode = ref('')
const scriptCode = ref('')
const styleCode = ref('')
const activeDemoId = ref<DemoSourceId | ''>('')

function decodeBase64(value: string) {
  try {
    return decodeURIComponent(escape(atob(value)))
  } catch {
    return ''
  }
}

function readFromUrl() {
  const search = new URLSearchParams(window.location.search)
  const id = search.get('id') as DemoSourceId | null

  const template = decodeBase64(search.get('template') ?? '')
  const script = decodeBase64(search.get('script') ?? '')
  const style = decodeBase64(search.get('style') ?? '')

  templateCode.value = template
  scriptCode.value = script
  styleCode.value = style

  if (id && id in demoSourceMap) {
    activeDemoId.value = id
    if (!templateCode.value && !scriptCode.value && !styleCode.value) {
      const fallback = demoSourceMap[id]
      templateCode.value = fallback.template
      scriptCode.value = fallback.script
      styleCode.value = fallback.style
    }
  } else {
    activeDemoId.value = ''
  }
}

function resetFromUrl() {
  readFromUrl()
}

const activeComponent = computed(() => {
  if (!activeDemoId.value) return null
  return demoComponentMap[activeDemoId.value]
})

readFromUrl()
</script>

<style scoped>
.playground {
  display: grid;
  grid-template-columns: minmax(380px, 520px) minmax(680px, 1fr);
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
  min-height: 150px;
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

.hint {
  color: #67c23a;
}

.error {
  color: #f56c6c;
}

.empty {
  color: #909399;
}
</style>
