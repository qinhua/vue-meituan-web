/*
name: 搜索组件
note: 用于header部分的搜索功能
time: 2018-12-18
*/
<template>
  <div class="search-panel">
    <el-row 
      :gutter="0" 
      class="m-header-searchbar">
      <el-col 
        :span="3" 
        class="left">
        <img 
          src="https://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" 
          alt="美团">
      </el-col>
      <el-col 
        :span="15" 
        class="center">
        <div class="wrapper">
          <el-input
            v-model="search"
            placeholder="搜索商家或地点"
            @focus="focusSearch"
            @blur="focusBlur"/>
          <button class="el-button el-button--primary search-btn"><i 
            class="el-icon-search"/></button>
          <dl 
            v-if="isHotPlace"
            class="hotPlace">
            <dt>热门搜索</dt>
            <dd
              v-for="(item, index) in hotList"
              :key="index">{{ item }}</dd>          
          </dl>
          <dl
            v-if="isSearchList"
            class="searchList">
            <dd
              v-for="(item, index) in searchList"
              :key="index">{{ item }}</dd>
          </dl>
        </div>
        <p class="suggest"><a href="">故宫博物院</a><a href="">故宫博物院</a><a href="">故宫博物院</a></p>
        <ul class="nav">
          <li>
            <nuxt-link 
              to="/" 
              class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link 
              to="/" 
              class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link 
              to="/" 
              class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col 
        :span="6" 
        class="right">
        <ul class="security">
          <li><i class="refund"/><p class="txt">随时退</p></li>
          <li><i class="single"/><p class="txt">不满意免单</p></li>
          <li><i class="overdue"/><p class="txt">过期退</p></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      isFocus: false,
      searchList: ['火锅', '烧烤', '海底捞'],
      hotList: ['武汉欢乐谷', '武汉海昌极地海洋公园', '中影国际影城']
    }
  },
  computed: {
    isHotPlace() {
      return !this.search && this.isFocus
    },
    isSearchList() {
      return this.search && this.isFocus
    }
  },
  methods: {
    focusSearch() {
      this.isFocus = true
    },
    focusBlur() {
      setTimeout(() => {
        this.isFocus = false
      }, 100)
    }
  }
}
</script>
