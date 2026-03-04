import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import everybody from 'everybody-ui'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(everybody)
app.mount('#app')
