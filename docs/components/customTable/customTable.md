---
outline: deep
---

# 表单： EbcustomTable

## 基础用法

<DemoPlayground demo-path="/components/customTable/EBcustomTableBase.vue">
  <!-- <demo vue="./EBcustomTableBase.vue" /> -->
</DemoPlayground>

## 单行/多行 Tooltip

<DemoPlayground demo-path="/components/customTable/EBcustomTableTooltip.vue">
  <demo vue="./EBcustomTableTooltip.vue" />
</DemoPlayground>

## Playground 使用提示

- 本地调试：仓库根目录运行 `pnpm playground:dev`，默认地址 `http://localhost:5173/playground/`。
- 分享链接：点击每个 Demo 下方的 **Open in Playground**，链接会包含完整示例源码，可直接发送给他人。
- 重置示例：Playground 中点击 **重置为 URL 示例**，即可回到链接携带的初始状态。

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
