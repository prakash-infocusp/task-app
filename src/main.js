import './assets/main.css'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router' // Use createWebHistory here
import App from './components/App.vue'
import About from './components/About.vue'
import AddTask from './components/AddTask.vue'
import Home from './components/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/add-task', component: AddTask },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
