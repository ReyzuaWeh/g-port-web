import { createRouter, createWebHistory } from 'vue-router'
import InputItem from '../components/InputItem.vue'
import About from '../views/AboutMe.vue'
import AppLearned from '../views/Learned.vue'
// import AppProject from '../views/Project.vue'
// import AppHome from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'About',
        component: About
    },
    {
        path: '/learned',
        name: 'Learned',
        component: AppLearned
    },
    // {
    //     path: '/projects',
    //     name: 'Projects',
    //     component: AppProject
    // },
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
