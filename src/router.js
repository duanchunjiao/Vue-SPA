
import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue' /*导入要使用的组件*/
import Login from './views/Login.vue'
Vue.use(Router)/*告诉vue使用router*/

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: '/login' /*这里是默认的界面，一打开浏览器显示的就是这个登录界面*/
    },
    {
      path: '/register',
      name: 'register',
      component: Register/*路径符合的时候会执行这里的代码*/
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/botnav',
      name: 'botnav',
      component: () => import('./views/Botnav.vue'),
      children:[
        {
          path: 'index',
          name: 'index',
          component: () => import('./views/Index.vue')
        },
        {
          path: 'list',
          name: 'list',
          component: () => import('./views/List.vue')
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('./views/Search.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          meta:{
            requireAuth:true,//当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
          },
          component: () => import('./views/Cart.vue')
        },
        {
          path: 'mine',
          name: 'mine',
          meta:{
            requireAuth:true,//当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
          },
          component: () => import('./views/Mine.vue')
        },
      ]
    },
  ]
})
