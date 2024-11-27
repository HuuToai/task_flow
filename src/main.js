import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/index.js';
import axios from 'axios'
window.axios = axios;
import { 
    Checkbox,
    Input,
    Avatar,
    Select,
    Table,
    Card,
    Menu,
    List,
    Drawer,
    Button, 
    message } from 'ant-design-vue';
import './static/fontawesome/css/all.min.css'
import 'ant-design-vue/dist/reset.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(Checkbox);
app.use(Input);
app.use(Avatar);
app.use(Select);
app.use(Button);
app.use(Drawer);
app.use(List);
app.use(Menu);
app.use(Card);
app.use(Table);
app.use(pinia);
app.config.globalProperties.$message = message;
app.mount('#app')
