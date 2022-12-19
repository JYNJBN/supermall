<template>
  <div class="cart-good">
    <cart-good-list
      v-for="(item, index) in cartList"
      :key="index"
      :cartGoodItem="item"
    ></cart-good-list>
  </div>
</template>

<script>
import CartGoodList from 'views/cart/cartComps/CartGoodList';
import { mapState } from 'vuex';

export default {
  name: 'CartGood',
  components: {
    CartGoodList,
  },
  computed: {
    ...mapState(['cartList']),
  },
};
</script>

<style scoped lang="less">
.cart-good {
  display: flex;
  flex-direction: column;
}
</style>
