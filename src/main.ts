/**
 * Portfolio project.
 * Author: Paweł Papierkowski.
 */
import { createApp } from 'vue';

import App from './App.vue';

import i18n from './code/i18n.ts'

import './styles/main.css';

const app = createApp(App);

app.use(i18n);

app.mount('#app');
