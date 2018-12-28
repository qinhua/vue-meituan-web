/*
  name: header组件
  note: 无
  time: 2018-12-18
*/
<template>
  <div class="m-header">
    <el-row>
      <el-col><top-bar/></el-col>
    </el-row>
    <el-row> 
      <el-col><search-bar/></el-col>
    </el-row> 
  </div>
</template>

<script>
import topBar from './topBar.vue'
import searchBar from './searchBar.vue'
export default {
  components: {
    topBar,
    searchBar
  },
  data() {
    return {
      title: 'xxx'
    }
  },
  mounted() {}
}
</script>

<style lang="scss">
@import '@/assets/css/public/header/index.scss';
</style>
