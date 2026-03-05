import type { DirectiveBinding, VNode, App } from "vue";

export interface TableRowData {
  [key: string]: any;
}

export interface CustomListConfig {
  cellRenderer?: (
    nodeData: {
      val: any;
      rowData: TableRowData;
      prop: string;
    },
    el: Element,
    binding: DirectiveBinding,
    vnode: VNode,
  ) => any; // 改为 any 兼容性最强
  click?: (rowData: TableRowData) => void;
}

export interface ItableHeaderNoChildren {
  prop: string;
  label: string;
  align?: 'left' | 'center' | 'right'; // 限制可选值提高类型安全性
  customList?: CustomListConfig[];
  showOverflowTooltip?: boolean;
  width?: string | number;
  boxClass?: string;
  boxStyle?: string;
  children?: never;
}

export interface ItableHeaderChildren {
  children: ItableHeaderNoChildren[];
  label: string;
  align?: 'left' | 'center' | 'right';
  prop?: never;
}

export type everybodyTableHeaderItem = ItableHeaderNoChildren | ItableHeaderChildren;
export type everybodyTableHeader = everybodyTableHeaderItem[];