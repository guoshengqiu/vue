<template>
<div>
  <router-link :to="{path: '/home'}">返回</router-link>
  <el-form :model="nvForm" ref="nvForm" label-width="500px">
    <el-form-item label="年龄"
      prop="age"
      inline-message=true
      :rules="[
        {required: true, message: '年龄不为空'},
        {type: 'number', message: '年龄必须为数字'},
        {validator: checkAge1}
      ]"
    >
      <el-input type="age" v-model.number="nvForm.age" autocomplete="off" class="age-value"></el-input>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data () {
    // 自定义验证规则
    // var checkAge = (rule, value, callback) => {
    //   if (value < 6) {
    //     return callback(new Error('填写正确的年龄'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      nvForm: {
        age: ''
      }
      // rules: {
      //   age: [
      //     {required: true, message: '年龄不为空'},
      //     {type: 'number', message: '年龄必须为数字'},
      //     {validator: checkAge}
      //   ]
      // }
    }
  },
  methods: {
    checkAge1 (rule, value, callback) {
      if (value < 0) {
        return callback(new Error('填写正确的年龄'))
      } else {
        callback()
      }
    }
  }
}
</script>

<style lang="scss">
  .age-value {
    width: 500px;
  }
</style>
