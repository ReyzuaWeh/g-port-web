import { createRouter, createWebHistory } from 'vue-router'
import InputItem from '../components/InputItem.vue'
import About from '../views/AboutMe.vue'
import AppLearned from '../views/Learned.vue'
// import AppHome from '../views/Home.vue'

const routes = [
    {
        path: '/learned',
        name: 'Learned',
        component: AppLearned
    },
    {
        path: '/',
        name: 'About',
        component: About
    },
    {
        path:'/kirim',
        name: 'kirim',
        component : InputItem
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
