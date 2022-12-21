<template>
  <div class="cart">
    <!--      顶部-->
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车({{ cartListLength }})</div>
      </template>
    </nav-bar>
    <!--      商品列表-->
    <scroll class="wrapper"> <cart-good></cart-good> </scroll>
    <!--      底部统计-->
    <bottom-statistics></bottom-statistics>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import NavBar from 'components/common/navbar/NavBar';
import CartGood from 'views/cart/cartComps/CartGood';
import Scroll from 'components/common/scroll/Scroll';
import BottomStatistics from 'views/cart/cartComps/BottomStatistics';

export default {
  name: 'cart',
  components: {
    NavBar,
    CartGood,
    Scroll,
    BottomStatistics,
  },
  computed: {
    ...mapState(['cartList']),
    ...mapGetters(['cartListLength']),
  },
};
</script>

<style scoped>
.cart {
  height: calc(100vh - 45px);
}
.wrapper {
  height: calc(100vh - 45px - 49px - 30px - 20px);
}
.nav-bar {
  position: relative;
  z-index: 1;
  background-color: var(--color-tint);
  color: white;
  font-size: 20px;
}
</style>
