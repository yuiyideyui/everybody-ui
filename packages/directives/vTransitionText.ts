import {
  type DirectiveBinding,
  watchEffect,
  ref,
  computed,
  type Ref,
  type VNode,
} from 'vue'
import { useTransition, TransitionPresets } from '@vueuse/core'

type TransitionCurve = keyof typeof TransitionPresets

interface TransitionOptions {
  value: number; //值
  duration?: number; //动画时长
  transition?: TransitionCurve; //动画曲线 - >https://easings.net/
  format?: boolean; // 是否千分位格式化
}

interface ElWithTransition extends HTMLElement {
  __transitionNumber__?: {
    source: Ref<number>
    stop: () => void
  }
}

function formatNumber(
  num: number,
  decimals: number,
  useFormat: boolean,
): string {
  return useFormat
    ? num.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : num.toFixed(decimals)
}
function setupTransition(el: ElWithTransition, options: TransitionOptions) {
  const {
    value,
    duration = 1000,
    transition = 'easeInOutCubic',
    format = false,
  } = options

  if (typeof value !== 'number') {
    el.textContent = String(value ?? '')
    return
  }

  // 取上一次的值作为动画起点
  const prev = el.__transitionNumber__?.source.value
  const source = ref(typeof prev === 'number' ? prev : 0)

  const animated = useTransition(source, {
    duration,
    transition: TransitionPresets[transition],
  })

  const decimalPlaces = computed(() => {
    const str = value.toString()
    const dotIndex = str.indexOf('.')
    return dotIndex === -1 ? 0 : str.length - dotIndex - 1
  })

  const stop = watchEffect(() => {
    el.textContent = formatNumber(animated.value, decimalPlaces.value, format)
  })

  el.__transitionNumber__ = { source, stop }

  // 这里触发动画
  source.value = value
}

export default {
  mounted(
    el: ElWithTransition,
    binding: DirectiveBinding<TransitionOptions | string | number>,
    vnode: VNode,
  ) {
    const val =
      typeof binding.value === 'object' ? binding.value.value : binding.value

    if (typeof val === 'number') {
      setupTransition(el, binding.value as TransitionOptions)
    } else {
      el.textContent = String(val ?? '')
    }
  },

  updated(
    el: ElWithTransition,
    binding: DirectiveBinding<TransitionOptions | string | number>,
    vnode: VNode,
  ) {
    const opts = binding.value
    const val = typeof opts === 'object' ? opts.value : opts

    if (typeof val === 'number') {
      if (el.__transitionNumber__) {
        el.__transitionNumber__.source.value = val
      } else {
        setupTransition(el, opts as TransitionOptions)
      }
    } else {
      // 非数字，展示原样
      el.textContent = String(val ?? '')
    }
  },

  unmounted(el: ElWithTransition) {
    el.__transitionNumber__?.stop()
    delete el.__transitionNumber__
  },
}
