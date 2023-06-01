import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {path: '/ticharlez34/', name: 'home', component: () => import('@/views/Home.vue')},
    {path: '/ticharlez34/player', name: 'player', component: () => import('@/views/Player.vue')},
    {path: '/ticharlez34/createAccount/', name: 'createAccount', component: () => import('@/views/AboutLayout.vue')},
    {path: '/ticharlez34/login/', name: 'login', component: () => import('@/views/login.vue')},
    {path: '/ticharlez34/twitch/', name: 'twitch', component: () => import('@/views/Twitch.vue')}
]

const router = createRouter({    
    history: createWebHistory(),
    routes
})

export default router