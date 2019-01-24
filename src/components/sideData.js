let sideData = {
  data () {
    return {
      chassisMenu: [{
        name: 'chassis',
        text: '智能机箱',
        path: '/chassis',
        children: [{
          name: 'allStatus',
          text: '全局状态',
          path: '/chassis/allStatus'
        }, {
          name: 'manage',
          text: '机箱管理',
          path: '/chassis/manage'
        }, {
          name: 'log',
          text: '机箱日志',
          path: '/chassis/log'
        }, {
          name: 'setManage',
          text: '配置管理',
          path: '/chassis/setManage'
        }]
      }]
    }
  }
}

export default sideData
