/* 
  name: 用户信息组件
  note: 用于header部分的用户信息功能
  time: 2018-12-18
*/
<template>
  <div class="m-user">
    <template v-if="user">
      欢迎您<span class="username" >{{ user }}</span>
      [<nuxt-link to="/exit">退出</nuxt-link>]
    </template>
    <template v-else>
      <nuxt-link 
        to="/login" 
        class="login">立即登录</nuxt-link>
      <nuxt-link 
        to="/register" 
        class="register">注册</nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
