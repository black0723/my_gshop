<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(s,index) in starClasses" :class="s" :key="index"></span>
    <!--<span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item half"></span>
    <span class="star-item off"></span>-->
  </div>
</template>

<script>
  export default {
    props: {
      score: Number,
      size: Number
    },
    computed : {
      //根据星星的得分，计算出几个星星（class类名）
      starClasses () {
        //同名属性赋值
        const {score} = this
        //总共5个星星
        const scs = []
        //向scs添加类名 n 个 on，例如 3.2  --> 3个on ,0个half，2个off
        const ons = Math.floor(score);
        for(let i=0;i<ons;i++){
          scs.push('on')
        }

        //向scs添加类名 0 个或 1 个 half，例如 3.5  --> 3个on ,1个half，1个off
        //if(score - ons >= 0.5),因为小数不精确，所以乘以10变成整数
        if(score*10 - ons*10 >= 5){
          scs.push('half')
        }

        //向scs添加类名 n 个 off
        while (scs.length < 5){
          scs.push('off')
        }
        return scs
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./stars/star48_on')
        &.half
          bg-image('./stars/star48_half')
        &.off
          bg-image('./stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./stars/star36_on')
        &.half
          bg-image('./stars/star36_half')
        &.off
          bg-image('./stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./stars/star24_on')
        &.half
          bg-image('./stars/star24_half')
        &.off
          bg-image('./stars/star24_off')
</style>
