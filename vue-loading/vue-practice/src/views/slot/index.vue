<template>
  <div>
    <div>
      <MyComponent>
        <span>123</span>
        <span>456</span>
      </MyComponent>
      <MyComponent>
        <a href="www.baidu.com">百度</a>
      </MyComponent>
    </div>
    <router-link :to="{path: '/'}">返回首页</router-link>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'

export default {
  components: { MyComponent }
}
</script>

<style>

</style>
