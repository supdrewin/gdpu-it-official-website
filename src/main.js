/**
 * @ Author: supdrewin
 * @ Create Time: 2022-12-03 21:27:18
 * @ Modified by: supdrewin
 * @ Modified time: 2022-12-11 00:49:32
 * @ Description: entry point
 */

import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';

import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(ElementPlus);
app.use(router);

app.mount('#app');
