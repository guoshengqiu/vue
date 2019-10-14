<template>
  <el-input v-model="input1" placeholder="请输入数字"></el-input>
</template>

<script>
/* 数组去重 */
function unique (arr) { // 利用ES6 Set去重
  return Array.from(new Set(arr))
}
var arr = [1, 1, 2, 5, 6, 8, 14, 17, 20, 4, 5, 8, 8]
/* 统计字符 */
var str = 'sseaerfafqwgsed'
var obj = {}
var i = 0
function count (str) {
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] ? obj[str[i]]++ : obj[str[i]] = 1
  }
  return obj
}
export default {
  data () {
    return {
      input1: '',
      max: 0,
      key: 0
    }
  },
  mounted () {
    console.log('利用ES6 Set去重：', unique(arr))
    console.log('for嵌套去重：', this.uniqueArray(arr))
    console.log(this.countStr(str))
  },
  methods: {
    uniqueArray (arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            arr.splice(j, 1)
            j--
          }
        }
      }
      return arr
    },
    countStr (str) {
      count(str)
      console.log(obj)
      for (i in obj) {
        if (obj[i] > this.max) {
          this.max = obj[i]
          this.key = i
        }
      }
      return this.max
    }
  }
}
</script>

<style>

</style>
