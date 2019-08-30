<template>
  <div @click="handle">
    返回顶部
  </div>
</template>

<script>
export default {
  name: 'ToTop',
  methods: {
    handle () {
      console.log('点击一次')
      this.$emit('returnTop')
    }
  }
}
</script>

<style>

</style>
