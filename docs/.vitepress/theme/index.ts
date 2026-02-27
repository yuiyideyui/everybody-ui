import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 利用你设置的别名
import everybody from 'everybody-ui'
import '@dist/index.css' 
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(ElementPlus)
    app.use(everybody)
    
    // 如果你在文档里直接用了 Element Plus 的指令或图标，
    // 可以在这里额外处理，但目前这样 app.use 已经涵盖了大部分基础
  }
}