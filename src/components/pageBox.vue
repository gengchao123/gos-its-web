<template>
  <div id="pageBox">
    <nav-header></nav-header>
    <side-menu></side-menu>
    <tab-list></tab-list>
    <div class="content">
      <keep-alive :include="saveList">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import navHeader from './nav-header'
import sideMenu from './sideMenu'
import tabList from './tabList'
import * as vuex from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...vuex.mapState({
      listArr: state => state.tablist.listArr,
      saveList: state => state.tablist.listArr.map((v) => {
        return v.name
      })
    })
  },
  components: {
    navHeader,
    sideMenu,
    tabList
  },
  created () {
  },
  mounted () {
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style lang="scss">
  #pageBox {
    min-width: 1420px;
    overflow: hidden;
    .content {
      background:#0e1326;
      height: calc(100vh - 124px);
      margin-left: 256px;
    }
  }
</style>
