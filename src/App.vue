<template>
  <div id="app">
    <!-- 路由视图,因为在mian.js里配置了router属性 -->
    <router-view></router-view>
    <!-- 3.引入组件 -->
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
    //1.导入组件
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'
    export default {
      //2.映射成标签
      components: {
        FooterGuide
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
