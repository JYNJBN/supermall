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
    <span class="settlement">结算:&nbsp{{ selectLength }}</span>
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
    selectLength() {
      return this.cartList.filter((item) => item.checkFlag === true).length;
    },
    isAllSelect() {
      if (this.cartList.length === 0) return false;
      // return !this.cartList.find((item) => item.checkFlag === false);
      return this.selectLength === this.cartList.length;
    },
  },
  methods: {
    onIsAllSelect() {
      //已经全部选中的情况下，点击全选，让全部选中项全部等于false，取消选中
      if (this.isAllSelect) this.cartList.forEach((item) => (item.checkFlag = false));
      //部分选中或者全部都不选中的情况下让所有的项设成true
      else this.cartList.forEach((item) => (item.checkFlag = true));
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
  height: 50px;
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
