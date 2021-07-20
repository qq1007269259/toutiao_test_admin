import { createApp } from 'vue'
// 加载Element组件库
import ElementPlus from 'element-plus'
// 引入Element组件库的样式
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'

// 最佳全局样式未见
import './styles/index.less'

createApp(App).use(router).use(ElementPlus).mount('#app')
