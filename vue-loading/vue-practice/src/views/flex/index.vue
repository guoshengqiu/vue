<template>
  <div class="flex">
    <router-link :to="{path: '/'}">返回首页</router-link>
    <div class="box">
      <span class="item"></span>
    </div>
    <div class="box1">
      <span class="item"></span>
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
    .box,.box1 {
      width: 120px;
      height: 120px;
      margin-left: 100px;
      margin-bottom: 50px;
      background-color: rgb(240, 231, 231);
      .item {
        display: inline-block;
        height: 30px;
        width: 30px;
        background-color: rgb(24, 23, 23);
        border-radius: 50%;
        margin: 5px;
      }
    }
  }
</style>
<style>
  .box {
    display: flex;
    justify-content: flex-end;/* center:中间,flex-end:右边 */
    align-items: center;
  }
  .box1 {
    display: flex;
  }
</style>
