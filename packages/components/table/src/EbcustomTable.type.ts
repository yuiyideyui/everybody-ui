import type { DirectiveBinding, VNode } from 'vue'
type ItableHeaderNoChildren = {
    prop: string
    label: string
    align?: string
    customList?: {
        cellRenderer?: (el: Element, binding: DirectiveBinding, Vnode: VNode, val: string, row: any, prop: string) => void //这里需要执行一个H函数--->render(h(ElButton, { class: 'bar', innerHTML: 'hello' }), el) 这里主要可以渲染一个组件
        click?: (row: any) => void
    }[]
    showOverflowTooltip?: boolean
    width?: string
    boxClass?: string
    boxStyle?: string
    children?: never;
}[]
type ItableHeaderChildren = {
    children: ItableHeaderNoChildren // 支持多级表头
    label: string
    align?: string
    prop?: never
}[]
export type everybodyTableHeader = ItableHeaderNoChildren | ItableHeaderChildren