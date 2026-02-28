import type { DirectiveBinding, VNode } from "vue";
type ItableHeaderNoChildren = {
  prop: string;
  label: string;
  align?: string;
  customList?: {
    cellRenderer?: (
      nodeData: {
        //this rowData value
        val: string;
        //this rowData
        rowData: {
          [key: string]: any;
        };
        //this rowData prop -> rowData[prop] === val
        prop: string;
      },
      el: Element,
      binding: DirectiveBinding,
      Vnode: VNode,
    ) => void;
    /**
     * use click stopPropagation,stop rowClick Event
     * @param rowData this rowData
     * @returns void
     */
    click?: (rowData: { [key: string]: any }) => void;
  }[];
  showOverflowTooltip?: boolean;
  width?: string;
  boxClass?: string;
  boxStyle?: string;
  children?: never;
};
type ItableHeaderChildren = {
  children: ItableHeaderNoChildren[]; // 支持多级表头
  label: string;
  align?: string;
  prop?: never;
};
// 3. 定义单个表头项类型（联合类型）
type everybodyTableHeaderItem = ItableHeaderNoChildren | ItableHeaderChildren;

// 4. 最终导出的数组类型
export type everybodyTableHeader = everybodyTableHeaderItem[];