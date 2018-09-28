/*
基于state的getter计算属性对象
 */
export default {
  totalCount (state) {
    //计算购物车里的商品总数，为food里的count和
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
  },
  totalPrice (state) {
    //计算购物车里的商品的价格总数
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
  }
}

