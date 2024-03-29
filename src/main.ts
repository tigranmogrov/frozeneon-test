import App from './App.vue';
import './assets/styles/global.scss';
import './assets/styles/reset.scss';
import { createPinia } from 'pinia';
import V3ScrollLock from 'v3-scroll-lock';
import { createApp } from 'vue';

const app = createApp(App);

app.use(createPinia());

app.use(V3ScrollLock, { reserveScrollBarGap: true });

app.mount('#app');
