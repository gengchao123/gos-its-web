<template>
  <div id='splitMorepage'>
    <el-pagination
      background
      :page-size="10"
      layout="prev, pager, next, jumper"
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
#splitMorepage {
  float: right;
  margin-top: 20px;
  .el-pagination.is-background .btn-prev:disabled, .el-pagination.is-background .btn-next:disabled {
    color: #305081;
  }
  .el-pagination.is-background .btn-prev {
    background-color: #122140;
    border: 1px solid #1b2c4f;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #0845bf;
  }
  .el-pagination.is-background .el-pager li {
    background-color: #122140;
    color: #69aaff;
  }
  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev {
    background-color: #122140;
    color: #69aaff;
    border: 1px solid #1b2c4f;
  }
  .el-pagination__jump {
    color: #5185ca;
  }
  .el-input__inner {
    background-color: #122140;
    border: 1px solid #1b2c4f;
    color: #578ed7;
  }
}
</style>
