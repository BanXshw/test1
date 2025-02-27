import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // لجعل بعض الميزات تعمل
import 'bootstrap-icons/font/bootstrap-icons.css';


const app = createApp(App);
app.mount('#app');
