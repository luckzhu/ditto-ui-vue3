import {createApp} from 'vue'
import App from './App.vue'

import "normalize.css/normalize.css";
import "./styles/index.scss";

import router from './router/index'

const app = createApp(App);
app.use(router).mount('#app');
