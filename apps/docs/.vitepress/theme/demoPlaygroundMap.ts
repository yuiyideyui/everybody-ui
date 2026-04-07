import tableBaseSource from '../../components/customTable/EBcustomTableBase.vue?raw'
import tableTooltipSource from '../../components/customTable/EBcustomTableTooltip.vue?raw'
import transitionSource from '../../Directives/NumTransition/DemoTransition.vue?raw'
import transitionFormatSource from '../../Directives/NumTransition/DemoTransitionFormat.vue?raw'
import EbMessageSource from '../../components/message/EbMessage.vue?raw'
import EbMessageCloseSource from '../../components/message/EbMessageClose.vue?raw'

export const demoSourceMap = {
  tableBase: tableBaseSource,
  tableTooltip: tableTooltipSource,
  directiveBase: transitionSource,
  directiveFormat: transitionFormatSource,
  EbMessageSource: EbMessageSource,
  EbMessageCloseSource: EbMessageCloseSource
} as const

export type DemoSourceId = keyof typeof demoSourceMap

export const demoPathToIdMap: Record<string, DemoSourceId> = {
  '/components/customTable/EBcustomTableBase.vue': 'tableBase',
  '/components/customTable/EBcustomTableTooltip.vue': 'tableTooltip',
  '/Directives/NumTransition/DemoTransition.vue': 'directiveBase',
  '/Directives/NumTransition/DemoTransitionFormat.vue': 'directiveFormat',
  '/components/message/EbMessage.vue': 'EbMessageSource',
  '/components/message/EbMessageClose.vue': 'EbMessageCloseSource'
}
