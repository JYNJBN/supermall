<template>
  <div class="goods-list-item" @click="toGoodDetail">
    <img @load="imgLoaded" class="goods-img" :src="goodsItemImg" alt="" />
    <p class="goods-title">{{ goodsItem.title }}</p>
    <p class="goods-info">
      <span style="margin-right: 15px">{{ goodsItem.price }}￥</span
      ><span>{{ goodsItem.cfav }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    goodsItemImg() {
      return this.goodsItem.image ? this.goodsItem.image : this.goodsItem.show.img;
      // return this.goodsItem.image || this.goodsItem.show.img;
    },
  },
  methods: {
    imgLoaded() {
      //第一种方法
      // if (this.$route.path === '/home') {
      //   this.$bus.$emit('homeImgLoaded');
      // } else if (this.$route.path === '/detail') {
      //   this.$bus.$emit('detailImgLoaded');
      // }
      this.$bus.$emit('imgLoaded');
    },
    toGoodDetail() {
      this.$router.push({
        path: 'detail',
        query: {
          id: this.goodsItem.item_id || this.goodsItem.iid,
        },
      });
    },
  },
  created() {},
};
</script>

<style scoped lang="less">
.goods-list-item {
  width: 48%;
  font-size: 14px;
  text-overflow: ellipsis;
  img {
    width: 100%;
  }
  .goods-title {
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .goods-info {
    position: relative;
    text-align: center;
    span:first-child {
      color: pink;
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        width: 14px;
        height: 14px;
        background: url('~assets/images/common/collect.svg') 0 0/14px 14px;
      }
    }
  }
  .goods-img {
    border-radius: 5%;
  }
}
</style>
