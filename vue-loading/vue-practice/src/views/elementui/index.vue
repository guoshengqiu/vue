<template>
  <div>
    <el-row>
      <el-col :span="24" class="header"><router-link :to="{path: '/'}">返回首页</router-link></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="cell">分栏之间不存在间隔</div></el-col>
      <el-col :span="6"><div class="cell"></div></el-col>
      <el-col :span="6"><div class="cell"></div></el-col>
      <el-col :span="6"><div class="cell"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div class="cell">分栏间隔,el-row的gutter=20</div></el-col>
      <el-col :span="6"><div class="cell"></div></el-col>
      <el-col :span="6"><div class="cell"></div></el-col>
      <el-col :span="6"><div class="cell"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div class="cell-m">分栏偏移</div></el-col>
      <el-col :span="6" :offset="6"><div class="cell-m">:offset="6"</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6"><div class="cell-m">:offset="6"</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="cell-v"></div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="cell-v">响应式布局</div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="cell-v"></div></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="cell-v"></div></el-col>
    </el-row>
    <Layout></Layout>
    <Input/>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
import Input from '@/components/Input'

export default {
  components: { Layout, Input }
}
</script>

<style lang="scss">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .header {
    color: #fff;
    background-color: #818181;
    min-height: 36px;
  }
  .cell {
    color: #24f;
    background-color: #d3dce6;
    min-height: 30px;
    border-radius: 4px;
  }
  .cell-m {
    color: #24f;
    background-color: #99a9bf;
    min-height: 30px;
    border-radius: 4px;
  }
  .cell-v {
    color: #049;
    background-color: #9949bf;
    min-height: 30px;
    border-radius: 4px;
  }
</style>
