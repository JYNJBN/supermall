<template>
  <div class="NavBar">
    <div class="left"><slot name="‘left’"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.NavBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  line-height: 44px;
  height: 44px;
  box-shadow: 1px 1px rgb(100, 100, 100, 0.1);
  z-index: 1;
  .left,
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
  }
}
</style>
