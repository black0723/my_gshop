/*
通过mutation间接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api'

//和后台交互的方法，然后把返回值传给mutations里的对应
export default {

  //1.异步获取地址
  async getAddress({commit,state}) {
    const geohash = state.latitude + ','+ state.longitude
    //1.发送异步ajax请求
    const result = await reqAddress(geohash)

    //2.根据结果提交mutation
    if(result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },

  //2.异步获取食品分类
  async getCategorys ({commit,state}) {
    //1.发送异步ajax请求
    const result = await reqCategorys()
    //2.根据结果提交mutation
    if(result.code === 0 ){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },

  //3.异步商家列表
  async getShops ({commit,state}) {
    //1.发送异步ajax请求
    const result = await reqShops(state.longitude,state.latitude)
    //2.根据结果提交mutation
    if(result.code === 0 ){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  }

}

