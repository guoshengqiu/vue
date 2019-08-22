<template>
  <div>
    <span>登录</span>
    <router-link :to="{path: '/', query: {id: 456}}">返回</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    id () {
      return this.$router.query.id
    }
  },
  mounted () {
    console.log(this.id)
  }
}
</script>

<style>

</style>
