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
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped lang="less">
.tabControl {
  display: flex;
  margin-top: 10px;
  position: sticky;
  top: 54px;
  z-index: 1;
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
