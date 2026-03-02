/**
 * Portfolio project.
 * Author: Paweł Papierkowski.
 */
import { createApp } from 'vue';

import './styles/main.css';
import i18n from './code/i18n.ts'

import App from './App.vue';

const app = createApp(App);

app.use(i18n);
app.mount('#app');
