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
