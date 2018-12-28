<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd
        v-for="(item, index) in menuData"
        :key="index">
        <i :class="item.type"/>{{ item.name }}
        <span class="arrow"/>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuData: [
        {
          type: 'food',
          name: '美食'
        },
        {
          type: 'hotel',
          name: '酒店'
        },
        {
          type: 'takeout',
          name: '外卖'
        },
        {
          type: 'food',
          name: '美食'
        },
        {
          type: 'food',
          name: '美食'
        },
        {
          type: 'food',
          name: '美食'
        }
      ]
    }
  }
}
</script>
