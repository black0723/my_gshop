/*
路由对象模块
 */
//引入vue组件
import Vue from 'vue'
//引入路由插件
import VueRouter from 'vue-router'

//引入路由组件
// import MSite from '../pages/MSite/MSite'
// import Order from '../pages/Order/Order'
// import Profile from '../pages/Profile/Profile'
// import Search from '../pages/Search/Search'

//路由组件的懒加载
const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

import Login from '../pages/Login/Login'

import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

//声明使用路由插件
Vue.use(VueRouter)

//向外暴露路由
export default new VueRouter({
  //配所有的路由
  routes: [
    {
      path: '/msite',
      // 返回路由组件的函数, 只有执行此函数才会加载路由组件, 这个函数在请求对应的路由路径时才会执行
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
    },{
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },{
          path: '/shop/ratings',
          component: ShopRatings
        },{
          path: '/shop/info',
          component: ShopInfo
        },{
          path: '',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})
