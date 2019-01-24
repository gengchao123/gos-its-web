import { setStorage } from '../../config/storage'

export default {
  state: {
    // 存放历史缓存tab
    listArr: [],
    // 存放当前所在位置
    selectIndex: null
  },
  actions: {
  },
  mutations: {
    push_page (state, data) {
      if (JSON.stringify(state.listArr).indexOf(JSON.stringify(data.path)) === -1) {
        state.listArr = [
          ...state.listArr,
          data
        ]
        state.selectIndex = state.listArr.length - 1
      } else {
        state.selectIndex = state.listArr.findIndex(v => v.path === data.path)
      }
      setStorage('listArr', state.listArr)
      setStorage('selectIndex', state.selectIndex)
    },
    delete_page (state, data) {
      let index = state.listArr.findIndex(v => v.path === data.path)
      if (index === state.selectIndex) {
        // 选中自己删除
        state.listArr.splice(index, 1)
        state.selectIndex = state.selectIndex - 1 < 0 ? 0 : state.selectIndex - 1
      } else {
        if (index < state.selectIndex) {
          // 选中自己,删除前面的
          state.listArr.splice(index, 1)
          state.selectIndex = state.selectIndex - 1
        } else {
          // 选中自己,删除后面的
          state.listArr.splice(index, 1)
        }
      }
      setStorage('listArr', state.listArr)
      setStorage('selectIndex', state.selectIndex)
    },
    set_index (state, data) {
      state.selectIndex = data
      setStorage('selectIndex', state.selectIndex)
    },
    set_listArr (state, data) {
      state.listArr = data
    }
  }
}
