import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/home.vue'
import Create from './views/aboutLayout.vue'
import Login from './views/login.vue'
import Twitch from './views/twitch.vue'
import Player from './views/player.vue'

const routes = [
    {path: '/ticharlez34/', name: 'home', component: Home},
    {path: '/ticharlez34/createAccount/', name: 'createAccount', component: Create},
    {path: '/ticharlez34/login/', name: 'login', component: Login},
    {path: '/ticharlez34/twitch/', name: 'twitch', component: Twitch},
    {path: '/ticharlez34/player/', name: 'player', component: Player}
]

const router = createRouter({    
    history: createWebHistory(),
    routes
})

export default router