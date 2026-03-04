# 安装

```shell
npm install everybody-ui
```

## 完整引入

`main.ts`
```ts
import { createApp } from 'vue'
import everybody from 'everybody-ui'
import 'everybody-ui/everybody-ui.css' 
import App from './App.vue'

const app = createApp(App)
//默认全局引入
app.use(everybody)
app.mount('#app')
```

## 按需导入

`main.ts`
```ts
import { createApp } from 'vue'
import everybody from 'everybody-ui'
import 'everybody-ui/everybody-ui.css' 
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
import { EverybodyUIResolver } from 'everybody-ui/resolver'

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
import { EverybodyUIResolver } from 'everybody-ui/resolver'

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

仓库根目录提供了 `playground/` workspace（Vite + Vue3），用于本地快速调试组件。

```shell
pnpm install
pnpm playground:dev
```

默认示例位于 `playground/src/App.vue`，内置了一个可编辑 JSON 的 `EbCustomTable` 演示区，修改数据后会实时刷新。

如果你希望先验证构建产物，可以执行：

```shell
pnpm playground:build
```

