import { createApp } from 'vue'
import App from './App.vue'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import '@/styles/variable.css'
import './style.css'

createApp(App).use(ContextMenu).use(Antd).mount('#app') 
