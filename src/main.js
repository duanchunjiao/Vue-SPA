import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible'
import setaxios from './setaxios'
setaxios()
Vue.config.productionTip = false
// 启用网络请求插件
Vue.prototype.$http=axios



//路由守卫
router.beforeEach((to,from,next)=>{
  //无论是刷新还是跳转路由，第一个进入的就是这个路由前置钩子函数
  store.commit('settoken',localStorage.getItem('token'))
  if(to.meta.requireAuth){
    if(store.state.token){
      next()
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }else{
    next()
  }
})




new Vue({/*页面入口*/
  router,
  store,
  render: h => h(App)
}).$mount('#app')
/*main文件是我们的入口文件，初始化vue实例并引入所需要的插件
* App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。
* 其实你也可以理解为所有的路由也是App.vue的子组件。
*在工程文件中使用main.js来加载App.vue文件的
* main.js中引入是全局引用
* /main.js在渲染的时候会被webpack引入变成app.js文件 app.js文件在index.html中会被引入
* main.js是项目的入口文件，项目中所有的页面都会加载main.js,所以main.js,主要有三个作用：
1.实例化Vue。
2.放置项目中经常会用到的插件和CSS样式。例如： 网络请求插件:axios和vue-resource、图片懒加载插件：vue-lazyload
3.存储全局变量。例如（用于的基本信息）

*
*
*
* */