<template>
  <div>
    <div class="test">
      <span>首页</span>
      <router-link :to="{path: '/sign', query: {id: 123}}">登录</router-link>
      <!-- <router-view></router-view> -->
      <div class="content-top">
        模块1
        <button @click="handle()">点击次数{{count}}</button>
      </div>
      <div class="content-middle">
        模块2
        <button @click="handle()">点击次数{{count}}</button>
      </div>
      <div class="content-bottom">模块3</div>
      <footer>底部</footer>
      <!-- <div class="to-top" @click="toTop">回到顶部</div> -->
      <ToTop class="to-top" @returnTop="toTop"/>
    </div>
  </div>
</template>

<script>
import ToTop from '@/components/ToTop'
import { mapState } from 'vuex'

export default {
  components: { ToTop },
  created () {
    console.log('a')
  },
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  // computed: mapState([
  //   'count'
  // ]),
  // computed: {
  //   // count () {
  //   //   console.log(this.$store.state.count)
  //   //   return this.$store.state.count
  //   // }
  // },
  methods: {
    toTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      console.log('回到顶部一次')
    },
    handle () {
      this.$store.commit('clickHandle')
    }
  }
}
</script>

<style>
  .test {
    position: relative;
    top: 0 ;
    left: 0;
  }
  .to-top {
    position: fixed;
    bottom: 200px;
    right: 0px;
    height: 90px;
    width: 30px;
    background-color: blue;
  }
  .content-top {
    height: 500px;
    width: 800px;
    margin: 20px;
    background-color: gray;
  }
  .content-middle {
    height: 500px;
    width: 800px;
    margin: 20px;
    background-color: red;
  }
  .content-bottom {
    height: 500px;
    width: 1000px;
    margin: 20px;
    background-color: yellow;
  }
</style>
