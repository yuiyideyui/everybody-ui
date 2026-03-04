<template>
  <main class="playground">
    <section class="editor-panel">
      <h1>Everybody UI Playground</h1>
      <p>编辑下方 JSON 数据后，右侧表格会实时刷新。</p>
      <textarea v-model="rowsText" spellcheck="false" />
      <p v-if="parseError" class="error">{{ parseError }}</p>
    </section>

    <section class="preview-panel">
      <EbCustomTable
        border
        stripe
        :data="rows"
        :table-header="tableHeader"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { everybodyTableHeader } from 'everybody-ui'

const tableHeader: everybodyTableHeader = [
  { label: '姓名', prop: 'name' },
  { label: '角色', prop: 'role' },
  { label: '城市', prop: 'city' }
]

const rowsText = ref(`[
  { "name": "Ada", "role": "Engineer", "city": "London" },
  { "name": "Linus", "role": "Maintainer", "city": "Helsinki" },
  { "name": "Grace", "role": "Scientist", "city": "New York" }
]`)

const parsedState = computed(() => {
  try {
    const parsed = JSON.parse(rowsText.value)
    return {
      rows: Array.isArray(parsed) ? parsed : [],
      error: ''
    }
  } catch (error) {
    return {
      rows: [],
      error: error instanceof Error ? error.message : 'JSON 解析失败'
    }
  }
})

const rows = computed(() => parsedState.value.rows)
const parseError = computed(() => parsedState.value.error)
</script>

<style scoped>
.playground {
  display: grid;
  grid-template-columns: minmax(280px, 420px) minmax(560px, 1fr);
  gap: 20px;
  min-height: 100vh;
  padding: 24px;
  background: #f5f7fa;
}

.editor-panel,
.preview-panel {
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
}

textarea {
  width: 100%;
  min-height: 360px;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  padding: 12px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
}

.error {
  color: #f56c6c;
}
</style>
