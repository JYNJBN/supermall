<template>
  <div class="base-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="base-info-top">
      <h4>{{ goodsInfo.title }}</h4>
      <div class="price">
        <span class="new-price">{{ goodsInfo.newPrice }}</span>
        <span class="old-price">{{ goodsInfo.oldPrice }}</span>
        <span class="discount-type" :style="styleObj">{{ goodsInfo.discount }}</span>
      </div>
    </div>
    <div class="base-info-center">
      <span>{{ goodsInfo.columns[0] }}</span>
      <span>{{ goodsInfo.columns[1] }}</span>
      <span>{{ goodsInfo.services[0].name }}</span>
    </div>
    <div class="base-info-bottom">
      <!--      如果v-for的数据源是一个数字如10每一项就是index从1到9-->
      <div class="bottom-item" v-for="index in goodsInfo.services.length - 2" :key="index">
        <img :src="goodsInfo.services[index + 1].icon" />
        <span>{{ goodsInfo.services[index + 1].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      styleObj: { backgroundColor: this.goodsInfo.discountBgColor },
    };
  },
};
</script>

<style scoped lang="less">
.base-info {
  display: flex;
  flex-direction: column;
  padding: 1vh;
  background-color: white;
  .base-info-top {
    font-size: 23px;
    padding-bottom: 1vh;
    .price {
      margin-top: 1vh;
    }
    .new-price {
      font-size: 20px;
      font-weight: bold;
      color: var(--color-high-text);
    }
    .old-price {
      font-size: 14px;
      font-weight: bold;
      color: rgba(128, 128, 128, 0.8);
      text-decoration: line-through;
      text-decoration-color: #100c07;
      margin: 0px 1vh;
    }
    .discount-type {
      color: white;
      font-size: 15px;
      padding: 5px;
      //border-radius: 5px;
      border-radius: 10px;
    }
  }
}
.base-info-center {
  display: flex;
  justify-content: space-between;
  color: rgba(128, 128, 128, 0.8);
  padding: 1vh 0;
  margin: 1vh 0;
}
.base-info-bottom {
  display: flex;
  margin-top: 2vh;
  justify-content: space-between;
  img {
    width: 2vh;
    height: 2vh;
    vertical-align: middle;
    margin: 0 5px 1px 5px;
  }
}
</style>
