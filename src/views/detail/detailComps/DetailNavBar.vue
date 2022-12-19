<template>
  <nav-bar>
    <template v-slot:left>
      <img class="left" src="~assets/images/common/back.svg" alt="back" @click="back" />
    </template>
    <template v-slot:center>
      <div class="items">
        <div
          v-for="(item, index) in list"
          :class="{ active: currentIndex === index }"
          @click="changeActive(index)"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import navBar from 'components/common/navbar/NavBar';
export default {
  name: 'DetailNavBar',
  components: { navBar },
  data() {
    return {
      list: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    };
  },
  methods: {
    changeActive(index) {
      this.currentIndex = index;
      this.$emit('changeActive', index);
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped lang="less">
.items {
  display: flex;
  & > div {
    flex: 1;
  }
}
.left {
  margin-top: 8px;
  width: 30px;
  height: 30px;
}
.active {
  color: var(--color-high-text);
}
</style>
