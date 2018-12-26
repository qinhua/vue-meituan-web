/*
  name: footer组件
  note: 无
  time: 2018-12-26
*/
<template>
  <div class="footer">{{ text }}</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      text: '版权所有All Rights Reserved'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  padding:20px 0;
  text-align:center;
  font-size:14px;
  color:#666;
  background: #f5f5f5;
}
</style>
