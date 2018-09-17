/*
直接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

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
  }
}

