<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <side-menu/>
      </el-col>
      <el-col :span="19">666</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">xxxxxxxx</el-col>
    </el-row>
  </div>
</template>

<script>
import SideMenu from '@/components/index/menu.vue'

export default {
  components: {
    SideMenu
  }
}
</script> 

<style lang="scss">
@import '../assets/css/index/index.scss';
</style>
