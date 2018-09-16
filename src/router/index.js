/*
路由对象模块
 */
//引入vue组件
import Vue from 'vue'
//引入路由插件
import VueRouter from 'vue-router'

//引入路由组件
import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

//声明使用路由插件
Vue.use(VueRouter)

//向外暴露路由
export default new VueRouter({
  //配所有的路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },{
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },{
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },{
      path:'/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },{
      //重定向
      path: '/',
      redirect: '/msite'
    },{
      path: '/login',
      component: Login
    }
  ]
})
