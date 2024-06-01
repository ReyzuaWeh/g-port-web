import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import App from './App.vue'
import './css/index.css'
import router from './router/router'

createApp(App).use(router).mount('#app')
