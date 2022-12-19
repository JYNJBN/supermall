<template>
  <div class="shop-info" v-if="Object.keys(shopInfo) !== 0">
    <div class="shop-top">
      <img :src="shopInfo.logo" :alt="shopInfo.name" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop-center">
      <div class="shop-center-left">
        <div class="sells">
          <span>{{ sells }}</span>
          <span>总销量</span>
        </div>
        <div class="goods-count">
          <span>{{ shopInfo.goodsCount }}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="shop-center-right">
        <div class="item" v-for="item in shopInfo.score">
          <span>{{ item.name }}</span>
          <span>{{ item.score }}</span>
          <span class="score" :class="{ isBetter: item.isBetter }">{{
            item.isBetter ? '高' : '低'
          }}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    sells() {
      const data = this.shopInfo.sells / 10000;
      return data.toFixed(1) + '万';
    },
  },
};
</script>

<style scoped lang="less">
.shop-info {
  display: flex;
  flex-direction: column;
  margin-top: 0.3vh;
  background-color: white;
  padding: 1vh;

  //overflow: hidden;
}
.shop-top {
  img {
    height: 5vh;
    vertical-align: middle;
    border-radius: 3vh;
    border: 1px solid rgba(128, 128, 128, 0.3);
    margin-right: 1vh;
  }
}
.shop-center {
  display: flex;
  padding: 2vh;
  align-items: center;
  .shop-center-left {
    display: flex;
    flex: 1;
    border-right: 1px solid rgba(128, 128, 128, 0.3);
    & > div {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
    }
    .sells > span {
      flex: 1;
    }
    .sells {
      span:first-child {
        font-size: 20px;
        font-weight: bold;
      }
    }

    .goods-count > span {
      flex: 1;
    }
    .goods-count {
      span:first-child {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .shop-center-right {
    flex: 1;
    padding-left: 1vh;
    > div {
      display: flex;
      justify-content: space-between;
    }
  }
  .score {
    background-color: green;
    color: white;
  }
  .isBetter {
    background-color: red;
  }
}
</style>
