import tableTooltipSource from '../../../docs/components/customTable/EBcustomTableTooltip.vue?raw'

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

const tableBaseDemo = `<template>
  <div v-eb-transition-text="{ value: num }"></div>
  <eb-custom-table
    width="100%"
    :stripe="false"
    :tableHeader="header"
    :data="data"
    @rowClick="rowClick"
  />
</template>

<script setup lang="ts">
import { h, ref } from 'vue'
import type { everybodyTableHeader } from 'everybody-ui'

const num = ref(0)
const rowClick = () => {
  num.value += 1000
}

const header: everybodyTableHeader = [
  {
    label: '点我不会触发行点击',
    align: 'center',
    prop: 'name',
    customList: [
      {
        cellRenderer: ({ val }: { val: string }) => h('div', null, val),
        click: () => {}
      }
    ]
  },
  {
    prop: 'name',
    label: '点击我+1000噢',
    align: 'center',
    customList: [
      {
        cellRenderer: ({ val }: { val: string }) => h('div', null, val)
      }
    ]
  },
  {
    prop: 'age',
    label: '点我年龄+1',
    align: 'center',
    customList: [
      {
        cellRenderer: ({ val, rowData, prop }: { val: string; rowData: any; prop: string }) => {
          const addAge = (step: number, row: any, key: string) => {
            row[key] += step
          }
          return h(
            'div',
            {
              onClick: () => addAge(1, rowData, prop)
            },
            val
          )
        },
        click: () => {}
      }
    ]
  }
]

const data = [
  { name: '张三', age: 18 },
  { name: '张三', age: 18 },
  { name: '张三', age: 18 }
]
</script>
`

const directiveBaseDemo = `<template>
  <div v-eb-transition-text="{ value: num }"></div>
  <el-button @click="addNum" type="primary" round>+1000</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const num = ref(0)
const addNum = () => {
  num.value += 1000
}
</script>
`

const directiveFormatDemo = `<template>
  <div v-eb-transition-text="{ value: num, format: formatNum }"></div>
  <el-button @click="addNum" type="primary" round>+1000</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const num = ref(0)
const addNum = () => {
  num.value += 1000
}
const formatNum = (value: number | string) => Number(value).toLocaleString('zh-CN')
</script>
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
    code: tableBaseDemo
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
    code: directiveBaseDemo
  },
  {
    id: 'directiveFormat',
    label: '指令格式化',
    description: 'v-transition-text 格式化示例。',
    code: directiveFormatDemo
  }
]

export const replDemoMap = Object.fromEntries(replDemos.map((demo) => [demo.id, demo]))
