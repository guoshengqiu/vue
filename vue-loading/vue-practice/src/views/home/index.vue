<template>
  <div>
    <span>首页</span>
    <router-link :to="{path: '/sign', query: {id: 123}}">登录</router-link>
  </div>
</template>

<script>
export default {
  created () {
    console.log('a')
  }
}
</script>

<style>

</style>
