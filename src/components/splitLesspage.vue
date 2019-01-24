<template>
  <div id='splitLesspage'>
    <el-pagination
      layout="prev, pager, next"
      :size="10"
      :total="100">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    pageData: {}
  }
}
</script>

<style lang="scss">
#splitLesspage {
  float: right;
  margin-top: 20px;
  .el-pagination button:disabled, .el-pager li {
    background-color: #122140;
    color: #305183;
  }
  .el-pager li.active {
    color: #fff;
  }
  .el-pager li {
    color: #69aaff;
  }
  .el-pagination .btn-next, .el-pagination .btn-prev {
    background: center center no-repeat #122140;
    color: #69aaff;
  }
  // .el-pagination.is-background .btn-prev:disabled, .el-pagination.is-background .btn-next:disabled {
  //   color: #305081;
  // }
  // .el-pagination.is-background .btn-prev {
  //   background-color: #122140;
  //   border: 1px solid #1b2c4f;
  // }
  // .el-pagination.is-background .el-pager li:not(.disabled).active {
  //   background-color: #0845bf;
  // }
  // .el-pagination.is-background .el-pager li {
  //   background-color: #122140;
  //   color: #69aaff;
  // }
  // .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev {
  //   background-color: #122140;
  //   color: #69aaff;
  //   border: 1px solid #1b2c4f;
  // }
  // .el-pagination__jump {
  //   color: #5185ca;
  // }
  // .el-input__inner {
  //   background-color: #122140;
  //   border: 1px solid #1b2c4f;
  //   color: #578ed7;
  // }
}
</style>
