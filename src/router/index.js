import Vue from 'vue'
import Router from 'vue-router'
import chassis from '../components/pageBox'
import allStatus from '../page/chassis/allStatus'
import manage from '../page/chassis/manage'
import log from '../page/chassis/log'
import setManage from '../page/chassis/setManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'chassis',
      component: chassis,
      redirect: '/chassis/allStatus',
      meta: {
        requiresAuth: true
      },
      children: [{
        path: '/chassis/allStatus',
        name: 'allStatus',
        component: allStatus
      }, {
        path: '/chassis/manage',
        name: 'manage',
        component: manage
      }, {
        path: '/chassis/log',
        name: 'log',
        component: log
      }, {
        path: '/chassis/setManage',
        name: 'setManage',
        component: setManage
      }]
    }
  ]
})
