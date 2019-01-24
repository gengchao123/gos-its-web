<template>
  <div id="header">
    <el-row  style="min-width: 1500px; overflow: hidden">
      <el-col :span='6'>
        <div class="header-logo">
          <i class="icon-logo"></i>
          <span class="header-text">城市交通运维服务管理平台</span>
        </div>
      </el-col>
      <el-col :span='14'>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#0845bf"
          text-color="#91c5ff"
          active-text-color="#ffffff"
          :router="true">
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/chassis/allStatus">智能机箱</el-menu-item>
          <!-- <el-menu-item index="/1chassis/allStatus1">智能机箱1</el-menu-item> -->
        </el-menu>
      </el-col>
      <el-col :span='4'>
        <div class="header-bottom">
          <i class="icon-notice"></i>
          <el-dropdown>
            <span class="el-dropdown-link">
              admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'nav-header',
  data () {
    return {
      activeIndex: '/chassis/allStatus'
    }
  },
  created () {
    this.judgePath()
  },
  mounted () {
    this.$bus.$on('changeHeader', () => {
      this.judgePath()
    })
  },
  methods: {
    judgePath () {
      if (this.$route.path.indexOf('/chassis') !== -1) {
        this.activeIndex = '/chassis/allStatus'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #header {
    background: #0845bf;
    .el-row {
      height: 64px;
    }
    .header-logo {
      padding-left: 35px;
      text-align: left;
      height: 64px;
      min-width: 378px;
      .icon-logo {
        content: url('../img/header/logo.png');
        margin-top: 18px;
        vertical-align: bottom;
      }
      .header-text {
        padding-left: 10px;
        color: #ffffff;
        font-size: 24px;
      }
    }
    .el-menu-item {
      padding: 0 30px;
      font-size: 18px;
    }
    .el-menu.el-menu--horizontal {
      border-bottom: 0px;
      &>.el-menu-item {
        height: 64px;
        line-height: 64px;
      }
    }
    .el-menu--horizontal>.el-menu-item.is-active {
      border-bottom: 2px solid #91c5ff!important;
      background: linear-gradient(to bottom, #0a4ac6, #125bdd)!important;
    }
    .el-menu-item:focus, .el-menu-item:hover {
      color: #ffffff!important;
      background: linear-gradient(to bottom, #0a4ac6, #125bdd)!important;
      border-bottom: 2px solid #91c5ff!important;
    }
    .header-bottom {
      height: 64px;
      .icon-notice {
        margin-top: 22px;
        content: url('../img/header/message.png');
        vertical-align: bottom;
      }
      .el-dropdown {
        cursor: pointer;
        color: #E6F3FF;
        margin-left: 10px;
        font-size: 16px;
      }
    }
  }
</style>
