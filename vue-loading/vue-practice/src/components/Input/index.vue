<template>
  <div class="form">
    <el-row>
      <el-col span="8">
        <el-input v-model="input" placeholder="基础用法"></el-input>
      </el-col>
      <el-col span="8">
        <el-input v-model="input1" placeholder="禁用状态" disabled></el-input>
      </el-col>
      <el-col span="8">
        <el-input v-model="input2" placeholder="可清空" clearable></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col span="2" class="text"><span>属性方式：</span></el-col>
      <el-col span="4">
        <el-input prefix-icon="el-icon-search" placeholder="头部显示图标" v-model="input3"></el-input>
      </el-col>
      <el-col span="4">
        <el-input suffix-icon="el-icon-date" placeholder="尾部显示图标" v-model="input4"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col span="2" class="text"><span>solt方式：</span></el-col>
      <el-col span="4">
        <el-input placeholder="头部显示图标" v-model="input5"><i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>
      </el-col>
      <el-col span="4">
        <el-input placeholder="尾部显示图标" v-model="input6"><i slot="suffix" class="el-input__icon el-icon-date"></i></el-input>
      </el-col>
    </el-row>
    <el-row class="food">
      <el-col span="6">
        <div>激活即列出建议</div>
        <el-autocomplete
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @select="handleSelect"
        ></el-autocomplete>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      state1: '',
      res: []
    }
  },
  mounted () {
    this.res = this.loadAll()
  },
  methods: {
    loadAll () {
      return [
        {'value': '棒棒鸡'},
        {'value': '叉烧面'},
        {'value': '馄饨'},
        {'value': '饺子'},
        {'value': '麻婆豆腐'},
        {'value': '牛肉面'}
      ]
    },
    querySearch (qs, cb) {
      let rest = this.res
      let results = qs ? rest.filter() : rest
      // 调用callback返回建议列表的数据
      cb(results)
    },
    createFilter (qs) {
      return (food) => {
        return (food.value.toLowerCase().indexOf(qs.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      console.log(item)
    }
  }
}
</script>

<style>
  .form {
    margin: 40px 0;
  }
  .el-input {
    width: 200px;
  }
  .text {
    font-size: 20px;
    line-height: 40px;
  }
  .food {
    padding-bottom: 200px;
  }
</style>
