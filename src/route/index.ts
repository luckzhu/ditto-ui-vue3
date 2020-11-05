import {createWebHashHistory, createRouter} from 'vue-router'
import HelloWord from '../components/HelloWorld.vue'
import Test from '../components/test.vue'

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: HelloWord},
    {path: '/test', component: Test},
  ]
});

export default router
