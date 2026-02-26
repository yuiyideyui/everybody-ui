import type { DirectiveBinding, VNode } from 'vue'
import { render } from 'vue'
export default {
  mounted(el: Element, binding: DirectiveBinding, vnode: VNode) {
    renderContent(el, binding, vnode)
  },
  updated(el: Element, binding: DirectiveBinding, vnode: VNode) {
    // 比较新旧值，避免死循环更新
    if (hasBindingChanged(binding)) {
      renderContent(el, binding, vnode)
    }
  },
}

function renderContent(el: Element, binding: DirectiveBinding, vnode: VNode) {
  try {
    const [renderFn, currentValue, rowData,prop] = binding.value
    const [_, oldValue, oldRowData] = binding.oldValue || []

    const shouldUpdate =
      currentValue !== oldValue ||
      JSON.stringify(rowData) !== JSON.stringify(oldRowData)

    if (shouldUpdate) {
      render(renderFn(el, binding, vnode, currentValue, rowData,prop),el) 
    }
  } catch (err) {
    console.error('[v-jsx-table] updated error:', err)
  }
}

function hasBindingChanged(binding: any): boolean {
  return JSON.stringify(binding.value) !== JSON.stringify(binding.oldValue)
}
