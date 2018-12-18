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
import Geo from './geo'
import Search from './search'
import Nav from './nav'
import User from './user'
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
  }
}
</script>

<style lang="scss" scoped>
</style>

