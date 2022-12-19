<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <!--        这里加一层div是为了防止slot被整个替换导致class失效-->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: {
      type: String,
      require: true,
    },
    activeColor: {
      type: String,
      default: 'red',
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.path.indexOf(this.$route.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style scoped lang="less">
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  align-items: center;
  img {
    width: 24px;
    height: 24px;
  }
}
</style>
