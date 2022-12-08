<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="pink">
      <template v-slot:item-icon>
        <img src="~assets/images/tabbar/shouye.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/images/tabbar/active-shouye.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="pink">
      <template v-slot:item-icon>
        <img src="~assets/images/tabbar/fenlei.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/images/tabbar/active-fenlei.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="pink">
      <template v-slot:item-icon>
        <img src="~assets/images/tabbar/gouwuche.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/images/tabbar/active-gouwuche.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="pink">
      <template v-slot:item-icon>
        <img src="~assets/images/tabbar/wode.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/images/tabbar/active-wode.png" alt="" />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from 'components/common/tabbar/TabBarItem';

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped></style>
