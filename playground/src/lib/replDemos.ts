import tableBaseSource from '../../../docs/components/customTable/EBcustomTableBase.vue?raw'
import tableTooltipSource from '../../../docs/components/customTable/EBcustomTableTooltip.vue?raw'
import transitionSource from '../../../docs/Directives/NumTransition/DemoTransition.vue?raw'
import transitionFormatSource from '../../../docs/Directives/NumTransition/DemoTransitionFormat.vue?raw'

export type ReplDemo = {
  id: string
  label: string
  description: string
  code: string
}

const basicComponentDemo = `<template>
  <div class="demo-card">
    <h3>Everybody UI + Element Plus</h3>
    <el-space>
      <el-button type="primary">主按钮</el-button>
      <el-tag type="success">运行中</el-tag>
    </el-space>
    <div class="counter">计数：{{ count }}</div>
    <el-button @click="count++">+1</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<style scoped>
.demo-card {
  padding: 16px;
  border: 1px solid #dcdfe6;
  border-radius: 8px;
}

.counter {
  margin: 12px 0;
}
</style>
`

export const replDemos: ReplDemo[] = [
  {
    id: 'basicComponents',
    label: '基础组件',
    description: '基础按钮与标签示例。',
    code: basicComponentDemo
  },
  {
    id: 'tableBase',
    label: '表格基础',
    description: 'EBCustomTable 基础示例。',
    code: tableBaseSource
  },
  {
    id: 'tableTooltip',
    label: '表格 tooltip',
    description: 'EBCustomTable Tooltip 与插槽。',
    code: tableTooltipSource
  },
  {
    id: 'directiveBase',
    label: '指令基础',
    description: 'v-transition-text 基础示例。',
    code: transitionSource
  },
  {
    id: 'directiveFormat',
    label: '指令格式化',
    description: 'v-transition-text 格式化示例。',
    code: transitionFormatSource
  }
]

export const replDemoMap = Object.fromEntries(replDemos.map((demo) => [demo.id, demo]))
