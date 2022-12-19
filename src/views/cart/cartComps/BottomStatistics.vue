<template>
  <div class="BottomStatistics">
    <div class="check-all">
      <cart-check-box
        ref="cartCheckBox"
        :checkFlag="isAllSelect"
        @click.native="onIsAllSelect"
        class="cart-check-box"
      ></cart-check-box>
      <span> &nbsp全选</span>
    </div>
    <span>合计：{{ cartListCount }}￥</span>
    <span class="settlement">结算:&nbsp{{ settlement }}</span>
  </div>
</template>

<script>
import CartCheckBox from 'views/cart/cartComps/CartCheckBox';
import { mapState } from 'vuex';

export default {
  name: 'BottomStatistics',
  data() {
    return {
      checkFlag: true,
    };
  },
  components: {
    CartCheckBox,
  },
  computed: {
    ...mapState(['cartList']),
    cartListCount() {
      return this.cartList
        .filter((item) => {
          return item.checkFlag === true;
        })
        .reduce((countValue, item) => {
          return countValue + item.price + item.count;
        }, 0);
    },
    settlement() {
      return this.cartList.filter((item) => item.checkFlag === true).length;
    },
    isAllSelect() {
      console.log(1);
      return this.settlement === this.cartList.length;
    },
  },
  methods: {
    onIsAllSelect() {
      console.log();
      this.cartList.forEach((item) => (item.checkFlag = !item.checkFlag));
    },
  },
};
</script>

<style scoped lang="less">
.BottomStatistics {
  display: flex;
  position: relative;
  background-color: #dcdcdc;
  z-index: 999;
  height: 30px;
  padding: 0 2vh;
  color: black;
  align-items: center;
  justify-content: space-between;
}
.check-all {
  display: flex;
}
.cart-check-box {
  width: 2vh;
  height: 2vh;
}
.settlement {
  display: flex;
  background-color: #f3620d;
  height: 100%;
  align-items: center;
  font-weight: 700;
  color: white;
  padding: 0 2vh;
}
</style>
