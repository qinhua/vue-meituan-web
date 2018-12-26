/*
  name: header组件
  note: 无
  time: 2018-12-18
*/
<template>
  <div>
    <geo/>
    <search/>
    <nav/>
    <user/>
  </div>
</template>

<script>
import Geo from './geo.vue'
import Search from './search.vue'
import Nav from './nav.vue'
import User from './user.vue'
export default {
  components: {
    Geo,
    Search,
    Nav,
    User
  },
  data() {
    return {
      title: 'xxx'
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
</style>
