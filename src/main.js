// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
// import echarts from 'echarts'
import App from './App'
import router from './router'
import store from './store/'
import axios from 'axios'
import $ from 'jquery'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$ = $
Vue.prototype.$axios = axios
// Vue.prototype.$echarts = echarts
Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
