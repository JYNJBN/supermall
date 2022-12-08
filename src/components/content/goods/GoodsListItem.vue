<template>
  <div class="goods-list-item">{{ goodsItem }}</div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped></style>
