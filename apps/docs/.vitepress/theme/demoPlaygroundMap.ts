import tableBaseSource from '../../components/customTable/EBcustomTableBase.vue?raw'
import tableTooltipSource from '../../components/customTable/EBcustomTableTooltip.vue?raw'
import transitionSource from '../../Directives/NumTransition/DemoTransition.vue?raw'
import transitionFormatSource from '../../Directives/NumTransition/DemoTransitionFormat.vue?raw'
import messageBaseSource from '../../components/message/EBmessageBase.vue?raw'
import messageCloseSource from '../../components/message/EBmessageClose.vue?raw'

export const demoSourceMap = {
  tableBase: tableBaseSource,
  tableTooltip: tableTooltipSource,
  directiveBase: transitionSource,
  directiveFormat: transitionFormatSource,
  messageBase: messageBaseSource,
  messageClose: messageCloseSource
} as const

export type DemoSourceId = keyof typeof demoSourceMap

export const demoPathToIdMap: Record<string, DemoSourceId> = {
  '/components/customTable/EBcustomTableBase.vue': 'tableBase',
  '/components/customTable/EBcustomTableTooltip.vue': 'tableTooltip',
  '/Directives/NumTransition/DemoTransition.vue': 'directiveBase',
  '/Directives/NumTransition/DemoTransitionFormat.vue': 'directiveFormat',
  '/components/message/EbMessageBase.vue': 'messageBase',
  '/components/message/EbMessageClose.vue': 'messageClose'
}
