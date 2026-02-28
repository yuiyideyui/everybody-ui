import type { App, Component } from 'vue'
import EbcustomTable from './components/table/src/EbcustomTable.vue'
import { initDirective } from './directives/directive'

export interface EverybodyUIOptions {
  global?: boolean // 是否全局注册组件
}
export { EbcustomTable }
export * from './index.type'
const components: Record<string, Component> = {
  'EbCustomTable': EbcustomTable,
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