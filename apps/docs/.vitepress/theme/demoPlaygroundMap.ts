import tableBaseSource from '../../components/customTable/EBcustomTableBase.vue?raw'
import tableTooltipSource from '../../components/customTable/EBcustomTableTooltip.vue?raw'
import transitionSource from '../../Directives/NumTransition/DemoTransition.vue?raw'
import transitionFormatSource from '../../Directives/NumTransition/DemoTransitionFormat.vue?raw'
import EbMessageBaseSource from '../../components/message/EbMessageBase.vue?raw'
import EbMessageCloseSource from '../../components/message/EbMessageClose.vue?raw'

export const demoSourceMap = {
  tableBase: tableBaseSource,
  tableTooltip: tableTooltipSource,
  directiveBase: transitionSource,
  directiveFormat: transitionFormatSource,
  EbMessageBase: EbMessageBaseSource,
  EbMessageClose: EbMessageCloseSource
} as const

export type DemoSourceId = keyof typeof demoSourceMap

export const demoPathToIdMap: Record<string, DemoSourceId> = {
  '/components/customTable/EBcustomTableBase.vue': 'tableBase',
  '/components/customTable/EBcustomTableTooltip.vue': 'tableTooltip',
  '/Directives/NumTransition/DemoTransition.vue': 'directiveBase',
  '/Directives/NumTransition/DemoTransitionFormat.vue': 'directiveFormat',
  '/components/message/EbMessageBase.vue': 'EbMessageBase',
  '/components/message/EbMessageClose.vue': 'EbMessageClose'
}
