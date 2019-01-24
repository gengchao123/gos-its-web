<template>
  <div id='tabList'>
    <div class="tab-list" v-for="(item, index) in listArr" :key="index" @click="selectTab(index)" :value='item.path'>
      <span>{{item.text}}</span>
      <i class="icon-close" @click="deletePage(item, $event)" v-show="index !== 0"></i>
    </div>
  </div>
</template>

<script>
import { getStorageByKey } from '../config/storage'
import * as vuex from 'vuex'
export default {
  name: 'tabList',
  data () {
    return {
    }
  },
  created () {
    // 后续默认塞首页
    this.set_listArr(getStorageByKey('listArr') || [{
      path: '/chassis/allStatus',
      name: 'allStatus',
      text: '全局状态'
    }])
    this.set_index(getStorageByKey('selectIndex') || 0)
  },
  computed: {
    ...vuex.mapState({
      listArr: state => state.tablist.listArr,
      selectIndex: state => state.tablist.selectIndex
    })
  },
  methods: {
    ...vuex.mapMutations(['delete_page', 'set_index', 'set_listArr']),
    selectTab (index) {
      if (document.getElementsByClassName('tab-list')[index].classList.contains('active')) {
        return
      }
      let list = document.getElementsByClassName('tab-list')
      for (let i = 0; i < list.length; i++) {
        if (list[i].classList.contains('active')) {
          list[i].classList.remove('active')
        }
      }
      document.getElementsByClassName('tab-list')[index].classList.add('active')
      this.$router.push(document.getElementsByClassName('tab-list')[index].getAttribute('value'))
      this.set_index(index)
      this.$bus.$emit('changeHeader')
    },
    deletePage (item, event) {
      this.delete_page(item)
      event.stopPropagation()
    }
  },
  watch: {
    selectIndex (newV) {
      this.$nextTick(() => {
        this.selectTab(newV)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#tabList {
  background: #0e1326;
  padding-top: 22px;
  margin-left: 256px;
  border-bottom: 1px solid #0b1c45;
  padding-left: 24px;
  white-space: nowrap;
  overflow-x: scroll;
  // &:hover {
  //   overflow-x: scroll;
  // }
  .tab-list {
    float: left;
    padding: 6px 15px;
    color: #0845bf;
    font-size: 14px;
    text-align: center;
    background: #0e1326;
    cursor: pointer;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    .icon-close {
      content: url('../img/tabList/close-normal.png');
      vertical-align: bottom;
    }
    &.active, &:hover {
      color: #52eff5;
      background: #0c193c;
      .icon-close {
        content: url('../img/tabList/close-focus.png');
        vertical-align: bottom;
      }
    }
  }
}
</style>
