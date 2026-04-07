---
outline: deep
---

# 消息： EbMessage

## 基础用法

<demo vue="./EbMessageBase.vue" playgroundUrl="https://yuiyideyui.github.io/Everybody-ui-playground" />

## 自定义关闭

<demo vue="./EbMessageClose.vue" playgroundUrl="https://yuiyideyui.github.io/Everybody-ui-playground" />


## 组件参数

```ts
export const EbMessage: (options: {
  jsx: VNode | (() => VNode);
  position: "top" | "bottom" | "left" | "right" | "center";
  timeClose?: number;
}) => {
  close: () => void;
}
```
