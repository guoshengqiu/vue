<template>
  <div>
    <el-container class="el" direction=" vertical">
      <el-header>顶部</el-header>
      <el-container>
        <el-main>主要区域</el-main>
        <el-aside width="300px">侧栏</el-aside>
      </el-container>
      <el-footer>底部</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="scss">
  .el {
    margin: 40px 0;
  }
  .el-header, .el-footer {
    color: #333;
    background-color: #b3c0d1;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-aside {
    background-color: #99EE03;
    color: #333;
    text-align: center;
  }
</style>
