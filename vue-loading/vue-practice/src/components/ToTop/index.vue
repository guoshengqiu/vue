<template>
  <div @click="handle">
    返回顶部
  </div>
</template>

<script>
export default {
  name: 'ToTop',
  props: {top1: Number},
  data () {
    return {
      newtop1: 0
    }
  },
  methods: {
    handle () {
      this.newtop1++
      console.log('点击一次', this.newtop1)
      this.$emit('update:top1', this.newtop1)
    }
  }
}
</script>

<style>

</style>
