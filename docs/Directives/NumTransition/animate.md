---
outline: deep
---

# 文本过渡：v-eb-transition-text

用于数字或文本变更时的平滑过渡动画。

## 基础用法

通过 `v-eb-transition-text` 指令，可以轻松实现数值滚动效果。
## 数字变化动画

<DemoPlayground demo-path="/Directives/NumTransition/DemoTransition.vue">
  <demo  vue="./DemoTransition.vue" />
</DemoPlayground>

## 数字变化动画(带千分位)

<DemoPlayground demo-path="/Directives/NumTransition/DemoTransitionFormat.vue">
  <demo vue="./DemoTransitionFormat.vue" />
</DemoPlayground>

## Playground 使用提示

- 本地调试：在仓库根目录执行 `pnpm playground:dev`，将自动热更新。
- 分享链接：文档中的 **Open in Playground** 会携带当前 Demo 的源码参数，可直接复现。
- 重置示例：若编辑器内容被改乱，点击 **重置为 URL 示例** 一键恢复。

## 指令参数

```ts
interface TransitionOptions {
  value: number; //值
  duration?: number; //动画时长 默认1000ms
  transition?: TransitionCurve; //动画曲线 默认easeInOutCubic - >https://easings.net/ 
  format?: boolean; // 是否千分位格式化 默认false
}
```
