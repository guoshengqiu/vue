<template>
  <div>
    <div class="test">
      <div class="header">
        <span>首页</span>
        <router-link :to="{path: '/sign', query: {id: 123}}">登录</router-link>
        <router-link :to="{path: '/flex', query: {id: 123}}">flex布局</router-link>
        <router-link :to="{path: '/elementui'}">ElementUi</router-link>
        <router-link :to="{path: '/slot'}">slot</router-link>
        <!-- <router-view></router-view> -->
      </div>
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
      <!-- @returnTop="toTop" -->
      <ToTop
        class="to-top"
        :top1.sync="top1"/>
    </div>
  </div>
</template>

<script>
import ToTop from '@/components/ToTop'
import { mapState } from 'vuex'
import { toggle } from '@/mixin/hello.js'

export default {
  mixins: [toggle],
  components: { ToTop },
  data () {
    return {
      top1: 1
    }
  },
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
    toTop (top1) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      console.log('回到顶部一次')
      // this.top1 = top1
    },
    handle () {
      this.$store.commit('clickHandle')
      // 引入toggle混入组件,就可以使用该组件中的sayHello方法了
      this.sayHello()
      console.log(this.top1)
    }
  }
}
</script>

<style lang="scss">
  .test {
    position: relative;
    top: 0 ;
    left: 0;
    .header {
      width: auto;
      height: 50px;
      background-color: #818181;
    }
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
