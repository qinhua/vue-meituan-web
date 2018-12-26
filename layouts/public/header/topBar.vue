/*
  name: topBar组件
  note: 无
  time: 2018-12-18
*/
<template>
  <el-row 
    :gutter="0"
    class="m-header">
    <el-col :span="6">
      <geo/>
    </el-col>
    <el-col :span="6">
      <user/>
    </el-col>
    <el-col :span="10">
      <nav-bar/>
    </el-col>
  </el-row>
</template>

<script>
import Geo from './geo.vue'
import NavBar from './nav.vue'
import User from './user.vue'
export default {
  components: {
    Geo,
    NavBar,
    User
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>

<style lang="scss">
</style>
