import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/AboutMe.vue'
// import AppHome from '../views/Home.vue'

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: AppHome
    // },
    {
        path: '/',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
