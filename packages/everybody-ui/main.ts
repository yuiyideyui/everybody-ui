import type { App, Component } from 'vue'
import EbCustomTable from './components/table/src/EbCustomTable.vue'
import { EbMessage } from './components/message/src/EBmessage'
import { initDirective } from './directives/directive'

export interface EverybodyUIOptions {
  global?: boolean // 是否全局注册组件
}
export { EbCustomTable,EbMessage }
export * from './index.type'
const components: Record<string, Component> = {
  'EbCustomTable': EbCustomTable,
  'EbMessage': EbMessage,
}

export default {
  install(app: App, options: EverybodyUIOptions = { global: true }) {
    initDirective(app)

    // 2. 根据参数决定是否要 app.component 全量注册
    if (options.global !== false) {
      for (const [name, component] of Object.entries(components)) {
        app.component(name, component)
      }
      console.log('[Everybody-UI] 全量组件已注册')
    } else {
      console.log('[Everybody-UI] 按需模式：组件需通过 Resolver 或手动引入')
    }
  }
}