// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
// 1. 全量引入 ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 2. 引入你的组件库
import everybody from '../../../dist/everybody'
import '../../../dist/everybody.css'
import './custom.css'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    // 3. 显式注册，这样就不再报 "Failed to resolve component"
    app.use(ElementPlus)
    app.use(everybody)
  }
}