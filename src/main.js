import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 最佳全局样式未见
import './styles/index.less'

createApp(App).use(router).mount('#app')
