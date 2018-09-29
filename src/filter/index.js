/*
* 过滤器
* */
import Vue from 'vue'
//moment 包太大了
//import moment from 'moment'

//这样引入会把所以的文件都打包进去
//import {format} from 'date-fns'
//这种引入方式只打包format
import format from 'date-fns/format'

//定义一个过滤器
Vue.filter('date-format',function (value) {
  //return moment(value).format('YYYY-MM-DD HH:mm:ss')
  return format(value,'YYYY-MM-DD HH:mm:ss')
})
