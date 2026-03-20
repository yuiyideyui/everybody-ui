<template>
  <div class="demo-playground-wrapper">
    <slot />
    <div class="demo-playground-actions">
      <a :href="playgroundHref" target="_blank" rel="noreferrer" class="playground-link">
        Open in Playground
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { demoPathToIdMap, demoSourceMap, type DemoSourceId } from '../demoPlaygroundMap'

const props = defineProps<{
  demoId?: DemoSourceId
  demoPath?: string
}>()

const resolvedDemoId = computed(() => {
  if (props.demoId) return props.demoId
  if (props.demoPath) return demoPathToIdMap[props.demoPath]
  return undefined
})

function encodeBase64(value: string) {
  return btoa(unescape(encodeURIComponent(value)))
}

const playgroundHref = computed(() => {
  const demoId = resolvedDemoId.value
  if (!demoId) return '#'

  const source = demoSourceMap[demoId]
  const search = new URLSearchParams({
    demo: demoId,
    code: encodeBase64(source)
  })

  return `http://localhost:5173/?${search.toString()}`
})
</script>

<style scoped>
.demo-playground-actions {
  margin-top: -2px;
  margin-bottom: 12px;
  display: flex;
  justify-content: flex-end;
}

.playground-link {
  color: var(--vp-c-brand-1);
  font-size: 13px;
  text-decoration: none;
  font-weight: 500;
}

.playground-link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}
</style>
