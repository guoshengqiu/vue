// mixin可以包含任意组件选项
// 定义一个mixin.js的文件和混入对象
export const toggle = {
  mounted () {
    console.log('mixin') // 在引入mixin主页中打开控制台则会出现'mixin'
  },
  methods: {
    sayHello () {
      console.log('hello')
    }
  }
}
