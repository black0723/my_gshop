<template>
  <section class="msite">
    <!--首页头部-->
    <!-- #3.用address的name属性赋值-->
    <HeaderTop1 :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop1>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <!-- v-if="categorysArr.length > 0" 当为空的时候显示下面的加载中图片 -->
        <div class="swiper-wrapper" v-if="categorysArr.length > 0">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl+category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <img src="./images/msite_back.svg" alt="back" v-else/>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
  import HeaderTop1 from '../../components/HeaderTop/HeaderTop'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import ShopList from '../../components/ShopList/ShopList'

  //#1.读vuex里的状态state数据
  import {mapState} from 'vuex'

  export default {
    data () {
      return {
        baseImageUrl : 'https://fuss10.elemecdn.com/'
      }
    },
    mounted () {

      //发送请求获取头部地址
      this.$store.dispatch('getAddress')
      //发送请求获取轮播数据
      this.$store.dispatch('getCategorys')

      //创建一个Swiper对象来实现轮播
      //静态页时候的代码
      /*new Swiper('.swiper-container',{
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })*/
    },
    computed: {
      //#2.读vuex里的state里的数据
      ...mapState(['address','categorys']),
      /*
      计算属性
      根据categorys一维数组生成一个2维数组，小数组中的元素个数最大为8
       */
      categorysArr () {
        const max = 8
        const arr = []
        const {categorys} = this
        let smallArr = []
        categorys.forEach((c, index) => {
          if(smallArr.length===0) {
            arr.push(smallArr)
          }
          smallArr.push(c)
          if(smallArr.length===max) {
            smallArr = []
          }
        })
        return arr
      }

    },
    watch : {
      //监视categorys的数据变化，实现，现有dom再实现轮播
      categorys (value) {
        //当categorys里的数据改变了，再创建Swiper，也就是在异步更新界面之前创建。
        //第一种方法，使用setTimeout
        /*setTimeout(() => {
          new Swiper('.swiper-container',{
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        },100)*/

        //第二种方法，使用$nextTick，在界面更新就立即创建swiper
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })

      }
    },
    components: {
      HeaderTop1,
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
</style>
