import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '../views/pages/Home.vue'
import Document from '../views/pages/Document.vue'
import TestDemo from '../components/TestDemo.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Document,
      children: [
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: TestDemo},
        {path: 'dialog', component: TestDemo},
        {path: 'tabs', component: TestDemo},
      ]
    },
  ]
});

export default router
