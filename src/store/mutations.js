/*
直接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'
import Vue from 'vue'

export default {
  //对应方法,接收一个值，传给state里的对应的值
  [RECEIVE_ADDRESS] (state,{address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state,{shops}){
    state.shops = shops
  },
  [RECEIVE_USERINFO] (state,{userInfo}){
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state){
    state.userInfo = {}
  },

  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [INCREMENT_FOOD_COUNT](state, {food}) {
    if(food.count){
      food.count++
    }else{
      //count是新增是属性，没有数据绑定
      //food.count=1

      //给vue里的对象设置属性，vue会绑定，参数：对象，属性名，属性值
      //这样让新增的属性也有数据绑定
      Vue.set(food,'count',1)

      //往购物车数组里添加商品
      state.cartFoods.push(food)
    }
  },
  [DECREMENT_FOOD_COUNT](state, {food}) {
    if(food.count){
      food.count--
      if(food.count === 0){
        //从购物车数组里减去商品
        const index = state.cartFoods.indexOf(food)
        state.cartFoods.splice(index,1)
      }
    }
  },
}

