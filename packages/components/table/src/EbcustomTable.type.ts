import type { DirectiveBinding, VNode } from "vue";
type ItableHeaderNoChildren = {
  prop: string;
  label: string;
  align?: string;
  customList?: {
    cellRenderer?: (
      nodeData: {
        //this row value
        val: string;
        //this row
        row: {
          [key: string]: any;
        };
        //this row prop -> row[prop] === val
        prop: string;
      },
      el: Element,
      binding: DirectiveBinding,
      Vnode: VNode,
    ) => void;
    /**
     * use click stopPropagation,stop rowClick Event
     * @param row this row
     * @returns void
     */
    click?: (row: { [key: string]: any }) => void;
  }[];
  showOverflowTooltip?: boolean;
  width?: string;
  boxClass?: string;
  boxStyle?: string;
  children?: never;
}[];
type ItableHeaderChildren = {
  children: ItableHeaderNoChildren; // 支持多级表头
  label: string;
  align?: string;
  prop?: never;
}[];
export type everybodyTableHeader =
  | ItableHeaderNoChildren
  | ItableHeaderChildren;
