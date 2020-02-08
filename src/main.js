import Vue from 'vue'
import App from './App'
import request from '@/utils/request'
// 在入口页面,把$request设置给Vue原型,那么在页面的Vue实例可以访问到
Vue.prototype.$request = request

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
