import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//import 'bootstrap/dist/css/bootstrap.css'; //bootstrap 5
//import 'bootstrap/dist/js/bootstrap.bundle.js';

import 'admin-lte/dist/css/adminlte.css';
import 'admin-lte/dist/js/adminlte';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';




createApp(App).use(store).use(router).use(VueSweetalert2).mount('#app')


