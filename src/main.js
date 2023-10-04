import { createApp } from 'vue'
import './style.css'
import router from "./router.js"
import App from './App.vue'
import store from "./store/index.js";


createApp(App).use(router).use(store).mount('#app')
