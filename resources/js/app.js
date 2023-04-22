import './bootstrap';
import App from './components/App.vue'
import router from './router';
import store from './store'
import Navbar from './components/Navbar.vue'


import { createApp } from 'vue';

const app = createApp(App);
app.use(router)
app.use(store)
app.component('Navbar', Navbar)
app.mount('#app');