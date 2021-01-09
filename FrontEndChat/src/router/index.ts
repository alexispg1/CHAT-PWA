import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Chat from '../views/Chat.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import VueCryptojs from 'vue-cryptojs'
import vueCrypt from 'vue-crypt'
 
Vue.use(vueCrypt); 
Vue.use(VueCryptojs)
Vue.use(VueRouter);

const routes = [
  {path: '/',name: 'home',component: Home,},
  {path: '/about',name: 'about',component: () => import('../views/About.vue'),},
  {path:'/Chat',name:'Chat',component:Chat},
  {path:'/Register',name:'Register',component:Register},
  {path:'/Login',name:'Login',component:Login},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
