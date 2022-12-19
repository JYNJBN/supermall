<template>
  <div class="cart-good-list">
    <div class="check">
      <cart-check-box
        @click.native="changeCheckFlag"
        :checkFlag="cartGoodItem.checkFlag"
      ></cart-check-box>
    </div>
    <div class="cart-img"><img :src="cartGoodItem.image" alt="" /></div>
    <div class="words">
      <h3 class="title">{{ cartGoodItem.title }}</h3>
      <div class="desc">{{ cartGoodItem.desc }}</div>
      <div class="price-count">
        <span class="price">￥{{ cartGoodItem.price }}</span>
        <span class="count">x{{ cartGoodItem.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CartCheckBox from 'views/cart/cartComps/CartCheckBox';

export default {
  name: 'CarGoodList',
  components: { CartCheckBox },
  props: {
    cartGoodItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    changeCheckFlag() {
      this.cartGoodItem.checkFlag = !this.cartGoodItem.checkFlag;
    },
  },
};
</script>

<style scoped lang="less">
.cart-good-list {
  display: flex;
  height: 25%;
  overflow: hidden;
  padding: 2vh;
  border-bottom: 1px solid #8f8e8e;
  .check {
    flex: 1;
  }
  .cart-img {
    flex: 4;
    border-radius: 4vh;
  }
  .words {
    flex: 8;
    overflow: hidden;
  }
  img {
    width: 10vh;
    border-radius: 1vh;
  }
  .words {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .title {
      font-size: 20px;
      color: black;
    }
    .desc {
      color: #8f8e8e;
    }
    .title,
    .desc {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .price-count {
    display: flex;
    justify-content: space-between;
    .price {
      font-size: 18px;
      color: orange;
    }
    .count {
      font-size: 20px;
      color: black;
    }
  }
  .check {
    display: flex;
    align-items: center;
    margin-right: 1vh;
  }
}
</style>
