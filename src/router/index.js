/**
 * @ Author: supdrewin
 * @ Create Time: 2022-12-03 21:27:18
 * @ Modified by: supdrewin
 * @ Modified time: 2022-12-11 01:10:22
 * @ Description: router
 */

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: '首页',
            component: HomeView
        },
        {
            path: '/about',
            name: '关于',
            component: AboutView
        }
    ]
});

export default router;
