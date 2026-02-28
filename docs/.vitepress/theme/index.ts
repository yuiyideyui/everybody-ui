import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 利用你设置的别名
import everybody from 'everybody-ui'
import 'everybody-ui/everybody-ui.css' 
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(ElementPlus)
    app.use(everybody,{
      global:false
    })
    
  }
}