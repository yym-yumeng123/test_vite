import { createApp } from 'vue'
import App from './App.vue'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'
import './style.css'

createApp(App).use(ContextMenu).mount('#app') 
