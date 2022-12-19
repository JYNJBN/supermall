<template>
  <div class="CartCheckBox" :class="{ active: checkFlag }">
    <img src="~assets/images/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'CartCheckBox',
  props: {
    checkFlag: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  data() {
    return {
      isActive: this.checkFlag,
    };
  },
};
</script>

<style scoped lang="less">
.CartCheckBox {
  width: 3vh;
  height: 3vh;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid grey;
  img {
    width: 100%;
    height: 100%;
  }
}
.active {
  background-color: var(--color-tint);
}
</style>
