/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from './router/index.js'
//注册store
import store from './store'

new Vue({
  el: '#app',
  render: h => h(App),
  //配置属性，配置完之后：多了路由标签和路由属性
  router,  //使用vue-router
  store    //使用vuex
})
