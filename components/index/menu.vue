<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in menuData"
        :key="index"
        @mouseenter="mouseIn(item.child)"
        @mouseleave="mouseOut">
        <i :class="item.type"/>{{ item.name }}
        <span class="arrow"/>
      </dd>
    </dl>
    <div
      v-if="showSide"  
      class="detail"      
      @mouseenter="sideIn"
      @mouseleave="sideOut">
      <template
        v-for="(item, index) in currentData">
        <h4 :key="index">{{ item.title }}</h4>
        <span
          v-for="(itm, idx) in item.child"
          :key="idx">{{ itm }}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSide: false,
      menuData: [
        {
          type: 'food',
          name: '美食',
          child: [
            {
              title: '美食',
              child: ['代金券', '火锅', '烧烤', '快餐']
            }
          ]
        },
        {
          type: 'takeout',
          name: '外卖',
          child: [
            {
              title: '外卖',
              child: ['美团外卖']
            }
          ]
        },
        {
          type: 'hotel',
          name: '酒店',
          child: [
            {
              title: '酒店',
              child: ['经济', '舒适', '高档', '豪华']
            }
          ]
        },
        {
          type: 'hotel',
          name: '民宿',
          child: [
            {
              title: '民宿',
              child: ['北京', '成都', '上海', '广州']
            }
          ]
        },
        {
          type: 'movie',
          name: '电影',
          child: [
            {
              title: '热映电影',
              child: [
                '云南虫谷',
                '来电狂响',
                '断片之险途夺宝',
                '蜘蛛侠-平行宇宙'
              ]
            },
            {
              title: '热门影院',
              child: ['金逸影城', '万达影城', 'CGV影城', '百老汇影城']
            }
          ]
        }
      ],
      currentData: []
    }
  },
  methods: {
    mouseIn(data) {
      this.currentData = data
      this.showSide = true
    },
    mouseOut() {
      this.showSide = false
    },
    sideIn() {
      this.showSide = true
    },
    sideOut() {
      this.showSide = false
    }
  }
}
</script>
<style lang="scss">
</style>
