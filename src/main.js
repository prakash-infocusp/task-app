import './assets/main.css'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router' // Use createWebHistory here
import App from './components/App.vue'
import About from './components/About.vue'
import Body from './components/Body.vue'

const routes = [
  {
    path: '/',
    component: App,
    children: [
      { path: '/', component: Body },
      { path: '/about', component: About },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
