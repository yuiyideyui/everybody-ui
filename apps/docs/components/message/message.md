---
outline: deep
---

# 消息： Ebmessage

## 基础用法

<demo vue="./EBmessage.vue" playgroundUrl="https://yuiyideyui.github.io/Everybody-ui-playground" />

## 自定义关闭

<demo vue="./EBmessageClose.vue" playgroundUrl="https://yuiyideyui.github.io/Everybody-ui-playground" />


## 组件prop

```ts
export const EbMessage: (options: {
  jsx: VNode | (() => VNode);
  position: "top" | "bottom" | "left" | "right" | "center";
  timeClose?: number;
}) => {
  close: () => void;
}
```
