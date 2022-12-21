<template>
  <div id="detail">
    <detail-nav-bar ref="navBar" @changeActive="toTypeY" class="nav-bar"></detail-nav-bar>
    <scroll :probeType="3" class="wrapper" ref="scroll">
      <detail-swiper
        :topImages="topImages"
        class="de-swiper"
        @swiperImgLoad="swiperImgLoad"
      ></detail-swiper>
      <detail-base-info :goodsInfo="goodsInfo"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @goodsInfoImgLoad="goodsInfoImgLoad"
      ></detail-goods-info>
      <detail-param-info ref="param" :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <GoodsList ref="recommend" class="good-list" :goods="recommendList"></GoodsList>
    </scroll>
    <detail-bottom-nav @addCart="addCart"></detail-bottom-nav>
    <back-top v-show="showBackTop" @click.native="backTop"></back-top>
    <!--    <toast :msg="toastMsg" :toastShow="toastShow"></toast>-->
  </div>
</template>

<script>
import DetailNavBar from 'views/detail/detailComps/DetailNavBar';
import DetailSwiper from 'views/detail/detailComps/DetailSwiper';
import DetailBaseInfo from 'views/detail/detailComps/DetailBaseInfo';
import DetailShopInfo from 'views/detail/detailComps/DetailShopInfo';
import DetailGoodsInfo from 'views/detail/detailComps/DetailGoodsInfo';
import DetailParamInfo from 'views/detail/detailComps/DetailParamInfo';
import DetailCommentInfo from 'views/detail/detailComps/DetailCommentInfo';
import GoodsList from 'components/content/goods/GoodsList';
import scroll from 'components/common/scroll/Scroll';
import DetailBottomNav from 'views/detail/detailComps/DetailBottomNav';

import { getGoodDetail, getRecommendDate, GoodsInfo, GoodsParam, ShopInfo } from 'network/detail';
import { backTopMixin } from '@/common/projectMixin';
import { debounce } from '@/common/debounce';
import Toast from 'components/common/toast/Toast';

export default {
  name: 'Detail',
  data() {
    return {
      id: this.$route.query.id,
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      imgLoadCallBack: null,
      saveTypeY: [],
      scrollCurrentIndex: 0,
      // toastMsg: '',
      // toastShow: false,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomNav,
    // Toast,
    scroll,
  },
  created() {
    this.getGoodDetail();
    this.getRecommendDate();
  },
  mixins: [backTopMixin],
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.imgLoadCallBack = () => {
      refresh();
    };
    this.$bus.$on('imgLoaded', this.imgLoadCallBack);

    this.$bus.$on('isScroll', this.scrollChangeTopActive);
  },
  updated() {},
  destroyed() {
    this.$bus.$off('imgLoaded', this.imgLoadCallBack);
    this.$bus.$off('isScroll', this.scrollChangeTopActive);
  },

  beforeRouteUpdate(to, from, next) {
    // 做一些想要做的处理...
    this.id = to.query.id;
    this.getGoodDetail();
    // this.errCode = to.params.code
    // this.info = formatErrorMsg(this.errCode)
    next(); // 一定要有next
  },

  methods: {
    getGoodDetail() {
      getGoodDetail(this.id).then((res) => {
        const data = res.result;
        // 轮播图数据
        this.topImages = data.itemInfo.topImages;
        //商品介绍数据
        this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services);
        //商家介绍数据
        this.shopInfo = new ShopInfo(data.shopInfo);
        // 商品信息
        this.detailInfo = data.detailInfo;
        // 获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        // 获取评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    getRecommendDate() {
      getRecommendDate().then((res) => {
        // console.log(11);
        // console.log(res);
        this.recommendList = res.data.list;
      });
    },
    goodsInfoImgLoad() {
      this.$refs.scroll.refresh();
      this.saveTypeY = [];
      this.saveTypeY.push(this.$refs.navBar.$el.offsetTop);
      this.saveTypeY.push(this.$refs.param.$el.offsetTop - 44);
      this.saveTypeY.push(this.$refs.comment.$el.offsetTop - 44);
      this.saveTypeY.push(this.$refs.recommend.$el.offsetTop - 44);
      this.saveTypeY.push(Infinity);
      console.log(this.saveTypeY);
    },
    swiperImgLoad() {
      this.$refs.scroll.refresh();
    },
    toTypeY(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.saveTypeY[index], 500);
    },
    scrollChangeTopActive({ y }) {
      {
        // [0, 2964, 3968, 4163,in]  saveTypeY
        for (let i = 0; i < this.saveTypeY.length - 1; i++) {
          if (-y > this.saveTypeY[i] && -y < this.saveTypeY[i + 1]) {
            this.scrollCurrentIndex = i;
            this.$refs.navBar.currentIndex = this.scrollCurrentIndex;
          }
        }
      }
    },
    async addCart() {
      console.log('addCart');
      const cartObj = {};
      cartObj.image = this.topImages[0];
      cartObj.title = this.goodsInfo.title;
      cartObj.desc = this.goodsInfo.desc;
      cartObj.price = parseFloat(this.goodsInfo.realPrice);
      cartObj.iid = this.id;
      //购物车勾选状态
      cartObj.checkFlag = true;
      // this.toastMsg = await this.$store.dispatch('addCart', cartObj);
      // this.toastShow = true;
      // setTimeout(() => {
      //   this.toastShow = false;
      // }, 1000);
      const res = await this.$store.dispatch('addCart', cartObj);
      this.$toast.show(res, 1000);
    },
  },
};
</script>

<style scoped lang="less">
#detail {
  height: 100vh;
  background-color: white;
  position: relative;
  z-index: 9;
}
.nav-bar {
  position: relative;
  z-index: 10;
  background-color: var(--color-background);
}
.de-swiper {
  height: 300px;
  overflow: hidden;
}
.wrapper {
  height: calc(100% - 44px - 58px);
  overflow: hidden;

  box-sizing: content-box;
}
.good-list {
  background-color: white;
}
</style>
