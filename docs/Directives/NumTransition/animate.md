---
outline: deep
---

# 文本过渡：v-eb-transition-text

用于数字或文本变更时的平滑过渡动画。

## 基础用法

通过 `v-eb-transition-text` 指令，可以轻松实现数值滚动效果。
## 数字变化动画

<demo  vue="./DemoTransition.vue" />

## 数字变化动画(带千分位)

<demo vue="./DemoTransitionFormat.vue" />

## 指令参数

```ts
interface TransitionOptions {
  value: number; //值
  duration?: number; //动画时长 默认1000ms
  transition?: TransitionCurve; //动画曲线 默认easeInOutCubic - >https://easings.net/ 
  format?: boolean; // 是否千分位格式化 默认false
}
```
