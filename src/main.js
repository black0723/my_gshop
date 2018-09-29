/*
入口JS
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

//引入路由
import router from './router/index.js'
//注册store
import store from './store'
//加载mockServer,直接引入
import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import './filter'

//注册全局组件标签
Vue.component(Button.name,Button) //<mt-button>
Vue.use(VueLazyload,{
  loading:loading,
  error:''
})

new Vue({
  el: '#app',
  render: h => h(App),
  //配置属性，配置完之后：多了路由标签和路由属性
  router,  //使用vue-router
  store    //使用vuex
})
