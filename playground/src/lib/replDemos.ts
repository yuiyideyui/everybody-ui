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



export const replDemos: ReplDemo[] = [
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
