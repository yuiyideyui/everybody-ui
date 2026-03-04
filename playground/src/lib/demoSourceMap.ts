import tableBaseSource from '../../../docs/components/customTable/EBcustomTableBase.vue?raw'
import tableTooltipSource from '../../../docs/components/customTable/EBcustomTableTooltip.vue?raw'
import transitionSource from '../../../docs/Directives/NumTransition/DemoTransition.vue?raw'
import transitionFormatSource from '../../../docs/Directives/NumTransition/DemoTransitionFormat.vue?raw'

export type DemoSourceParts = {
  template: string
  script: string
  style: string
}

function parseSfc(source: string): DemoSourceParts {
  const matchBlock = (tag: 'template' | 'script' | 'style') => {
    const match = source.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'))
    return match?.[1]?.trim() ?? ''
  }

  return {
    template: matchBlock('template'),
    script: matchBlock('script'),
    style: matchBlock('style')
  }
}

export const demoSourceMap = {
  customTableBase: parseSfc(tableBaseSource),
  customTableTooltip: parseSfc(tableTooltipSource),
  numTransitionBase: parseSfc(transitionSource),
  numTransitionFormat: parseSfc(transitionFormatSource)
} as const

export type DemoSourceId = keyof typeof demoSourceMap
