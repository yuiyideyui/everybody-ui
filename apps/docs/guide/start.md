# 快速开始

## 安装

```shell
npm install @yuiyideyui/everybody-ui
```

## 完整引入

`main.ts`
```ts
import { createApp } from 'vue'
import everybody from '@yuiyideyui/everybody-ui'
import '@yuiyideyui/everybody-ui/everybody-ui.css' 
import App from './App.vue'

const app = createApp(App)
//默认全局引入
app.use(everybody)
app.mount('#app')
```

## 按需导入

```shell
npm i unplugin-auto-import unplugin-vue-components
```

`main.ts`
```ts
import { createApp } from 'vue'
import everybody from '@yuiyideyui/everybody-ui'
import '@yuiyideyui/everybody-ui/everybody-ui.css' 
import App from './App.vue'

const app = createApp(App)
//global:fase 这里需要加载指令
app.use(everybody,{
  global:false
})
app.mount('#app')
```

### vite

`vite.config.ts`

```ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { EverybodyUIResolver } from '@yuiyideyui/everybody-ui/resolver'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [EverybodyUIResolver()],
    }),
    Components({
      resolvers: [EverybodyUIResolver()],
    }),
  ],
})
```

### Webpack

`webpack.config.js`

```js  [webpack.config.js]
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
import { EverybodyUIResolver } from '@yuiyideyui/everybody-ui/resolver'

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [EverybodyUIResolver()],
    }),
    Components({
      resolvers: [EverybodyUIResolver()],
    }),
  ],
}
```

## 使用 Playground 调试 Demo

基于Elment-plus-playground创建了一个Playground，可以快速调试组件。

[github](https://github.com/yuiyideyui/everybody-ui-playground)

[Playground](https://yuiyideyui.github.io/everybody-ui-playground)