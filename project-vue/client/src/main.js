// Point d'entrée de l'application
import { createApp } from 'vue'
import App from './App.vue' // Landing page
import router from './router'
import './assets/css/tailwind.css' // Tailwind CSS

createApp(App).use(router).mount('#app')
