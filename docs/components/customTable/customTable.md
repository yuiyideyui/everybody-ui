---
outline: deep
---

# 表单：EbcustomTable

## 基础用法

<demo vue="./EBcustomTableBase.vue" />

## 单行/多行 Tooltip

<demo vue="./EBcustomTableTooltip.vue" />

## 组件prop

```ts
type propsType = {
    tableHeader: everybodyTableHeader
    customListLoading?: boolean
    data: Record<string, any>[]
    isDataSlice?: {
        isSlice: false
    }
    rowHeight?: number
    //其他参数等同于el-table
}
type propsType1 = {
    tableHeader: everybodyTableHeader
    customListLoading?: boolean
    data: Record<string, any>[]
    isDataSlice: {//虚拟滚动
        isSlice: true//开启
        num: number//展示多少行
    }
    rowHeight: number//虚拟滚动行高必须设置
    //其他参数等同于el-table
}
```
