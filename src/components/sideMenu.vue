<template>
  <div id="sideMenu">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#122140"
      text-color="#acb2bc"
      active-text-color="#fff"
      :router="true"
      @select="goPage"
      >
      <el-submenu :index="list.path" v-for='(list, index) in menuDatas' :key="index">
        <template slot="title">
          <i class="el-icon-chassis"></i>
          <span>{{list.text}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="item.path" v-for='(item) in menuDatas[index].children' :key="item.name">{{item.text}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import * as vuex from 'vuex'
import sideData from './sideData'
export default {
  name: 'sideMenu',
  mixins: [sideData],
  data () {
    return {
      defaultActive: '',
      menuDatas: []
    }
  },
  props: {
  },
  created () {
    this.getMenuByPath()
    this.defaultActive = this.$route.path
  },
  mounted () {
  },
  methods: {
    ...vuex.mapMutations(['push_page']),
    goPage (path) {
      let parentIndex = null
      let childrenIndex = null
      this.menuDatas.forEach((value, index) => {
        childrenIndex = value.children.findIndex(value => value.path === path)
        if (childrenIndex !== -1) {
          parentIndex = index
        }
      })
      this.push_page({
        path: path,
        text: this.menuDatas[parentIndex].children[childrenIndex].text,
        name: this.menuDatas[parentIndex].children[childrenIndex].name
      })
    },
    getMenuByPath () {
      if (this.$route.path.indexOf('/chassis') !== -1) {
        this.menuDatas = this.chassisMenu
      }
    }
  },
  watch: {
    $route (to, from) {
      this.getMenuByPath()
      this.defaultActive = to.path
      this.goPage(to.path)
    }
  }
}
</script>

<style>
.el-submenu .el-submenu__title .el-icon-arrow-down:before {
    width: 13px;
    height: 7px;
    content: url('../img/sideMenu/top.png')!important;
    opacity: .65;
  }

.el-submenu.is-active.is-opened .el-submenu__title .el-icon-arrow-down:before {
  width: 13px;
  height: 7px;
  opacity: 1;
}
.el-menu-item-group__title {
  padding: 0 0 0 20px!important;
}

.el-submenu__icon-arrow {
  margin-top: -9px;
}
</style>

<style lang="scss" scoped>
  #sideMenu {
    width: 256px;
    float: left;
    .el-menu {
      height: calc(100vh - 64px);
      font-size: 16px;
      text-align: left;
      border-right: 0px;
      .el-menu-item.is-active {
        background: #1561e6!important;
      }
      .el-menu-item:hover {
        background: #1561e6!important;
        color: #ffffff!important;
      }
      .el-icon-chassis {
        width: 14px;
        height: 18px;
        content: url('../img/sideMenu/menu-icon.png');
        opacity: .65;
      }
      .el-submenu.is-active.is-opened .el-submenu__title {
        span, i {
          color: #ffffff!important;
        }
        .el-icon-chassis {
          opacity: 1;
        }
      }
    }
  }
</style>
