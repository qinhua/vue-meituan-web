<template>
  <el-container>
    <el-header>
      <header-bar/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer
      height="100%"
      style="padding: 0">
      <footer-bar/>
    </el-footer>
  </el-container>
</template>
<script>
import HeaderBar from '@/components/public/header/index.vue'
import FooterBar from '@/components/public/footer/index.vue'

export default {
  components: {
    HeaderBar,
    FooterBar
  },
  data() {
    return {
      title: '我是标题'
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
