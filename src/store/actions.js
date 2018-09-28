/*
通过mutation间接更新state的多个方法的对象
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
  DECREMENT_FOOD_COUNT,

} from './mutation-types'

import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  reqLogout,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods
} from '../api'

//和后台交互的方法，然后把返回值传给mutations里的对应
export default {

  //1.异步获取地址
  async getAddress ({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    //1.发送异步ajax请求
    const result = await reqAddress(geohash)

    //2.根据结果提交mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  //2.异步获取食品分类
  async getCategorys ({commit, state}) {
    //1.发送异步ajax请求
    const result = await reqCategorys()
    //2.根据结果提交mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  //3.异步商家列表
  async getShops ({commit, state}) {
    //1.发送异步ajax请求
    const result = await reqShops(state.longitude, state.latitude)
    //2.根据结果提交mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  //4.获取当前登陆用户信息
  getUserInfo ({commit}, userInfo) {
    commit(RECEIVE_USERINFO, {userInfo})
  },

  //5.从后台后获取用户登陆信息
  async getUserInfo2 ({commit}) {
    const result = await reqUser()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USERINFO, {userInfo})
    }
  },

  //异步登出
  async logout ({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },

  // 异步获取商家信息
  async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      info.score = 3.5
      commit(RECEIVE_INFO, {info})
    }
  },
  // 异步获取商家评价列表
  async getShopRatings ({commit}) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  // 异步获取商家商品列表
  async getShopGoods ({commit},callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})

      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      callback && callback()
    }
  },

  //同步更新food中的count
  updateFoodCount({commit},{isAdd,food}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else{
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  }
}

