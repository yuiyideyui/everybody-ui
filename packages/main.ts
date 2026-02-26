import type { App } from 'vue'
import customTable from './components/table/src/customTable.vue'
import type { everybodyTableHeader } from './components/table/src/customTable.type'
import { initDirective } from './directives/directive'
export { customTable }
export type { everybodyTableHeader }

export default {
  install(app: App) {
    initDirective(app)
    app.component('eb-customTable', customTable)
  }
}