<template>
  <div class="tabControl">
    <div class="tabItem" v-for="(item, index) in tabArry" :key="index">
      <span @click="setIndex(index)" :class="{ active: index === currentIndex }">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabControl',
  props: {
    tabArry: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    setIndex(index) {
      //改变当前Index去将对应项变成活跃Active
      this.currentIndex = index;
      //发起一个自定义事件将index值给Home组件
      this.$emit('getIndex', index);
    },
  },
};
</script>

<style scoped lang="less">
.tabControl {
  display: flex;
  top: 44px;
  height: 30px;
  line-height: 30px;
  z-index: 1;
  background-color: white;
  .tabItem {
    flex: 1;
    text-align: center;
    font-weight: bold;
  }
}
.active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}
</style>
