<template>
  <div class="flex">
    <router-link :to="{path: '/'}">返回首页</router-link>
    <div class="box">
      <span class="item"></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .flex {
    height: 500px;
    width: 100%;
    padding-top: 50px;
    text-align: center;
    background-color: rgb(24, 23, 23);
    .box {
      width: 130px;
      height: 130px;
      margin-left: 100px;
      background-color: rgb(240, 231, 231);
      .item {
        display: inline-block;
      }
    }
  }
</style>
<style>
  .box {
    display: flex;
  }
</style>
