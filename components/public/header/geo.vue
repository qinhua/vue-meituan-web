/* 
  name: 定位组件
  note: 用于header部分的城市定位功能
  time: 2018-12-18
*/
<template>
  <div class="m-geo">
    <i class="el-icon-location"/>北京市
    <nuxt-link 
      class="changeCity" 
      to="/changeCity">切换城市</nuxt-link>[武汉 北京 上海 广州]
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
