<template>
  <div id="app">
    <keep-alive include="Home"> <router-view></router-view> </keep-alive>
    <main-tab-bar class="main-tab-bar" id="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mianTabbar/MainTabBar';

export default {
  name: 'App',
  components: {
    MainTabBar,
  },
};
</script>

<style lang="less">
@import '@/assets/css/base.css';
#app {
  height: 100vh -54px;
}
#main-tab-bar {
  color: black;
  position: relative;
  width: 100%;
  margin: 0;
  box-shadow: none;
}
</style>
