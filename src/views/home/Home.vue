<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <h1>购物街</h1>
      </template>
    </nav-bar>
    <tab-control
      ref="tab_control1"
      :tab-arry="['流行', '新款', '精选']"
      @getIndex="changeGoodsType"
      v-show="isTabControlFixed"
    ></tab-control>
    <scroll class="wrapper" ref="scroll" :probeType="3" :pullUpLoad="true">
      <home-swiper :banner="banner"></home-swiper>
      <home-recommend-view :recommend="recommend"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control
        ref="tab_control2"
        :tab-arry="['流行', '新款', '精选']"
        @getIndex="changeGoodsType"
        :class="{ tabControlFixed2: isTabControlFixed }"
      ></tab-control>
      <goods-list :goods="goods[GoodsType].data"></goods-list>
    </scroll>
    <back-top v-show="showBackTop" @click.native="backTop"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from 'views/home/childComps/HomeSwiper';
import HomeRecommendView from 'views/home/childComps/HomeRecommendView';
import FeatureView from 'views/home/childComps/FeatureView';
import tabControl from 'components/content/tabControl/tabControl';
import GoodsList from 'components/content/goods/GoodsList';
import Scroll from 'components/common/scroll/Scroll';

import { getHomeGoods, getHomeMultidata } from 'network/home';
// import { imgLoadMixin } from '@/common/projectMixin';
import { debounce } from '@/common/debounce';
import { backTopMixin } from '@/common/projectMixin';

// import { throttle } from '@/common/throttlingAndAntiShaking';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    tabControl,
    GoodsList,
    Scroll,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, data: [] },
        new: { page: 0, data: [] },
        sell: { page: 0, data: [] },
      },
      GoodsType: 'pop',

      tabControlOffsetTop: 0,
      isTabControlFixed: false,
      saveY: 0,
      imgLoadCallBack: null,
    };
  },
  mixins: [backTopMixin],
  methods: {
    /*网络请求相关方法*/
    //封装一层 created里应该尽量少写数据处理
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      //每次请求都让相应的商品类型的页数加一
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        //每次请求都让相应的商品数据累加
        this.goods[type].data.push(...res.data.list);
        //每次请求都让相应的商品类型的页数加一
        this.goods[type].page = page;
        //完成一次上拉请求一次getHomeGoods方法，重置一下上拉，让下次上拉生效
        this.$refs.scroll.finishPullUp();
      });
    },

    /*事件监听相关方法*/
    //获取tabControl里定义的自定义事件的index值，去改变发给GoodsList组件的数据
    //就是将切换流行、新款、精选数据
    changeGoodsType(index) {
      switch (index) {
        case 0:
          this.GoodsType = 'pop';
          break;
        case 1:
          this.GoodsType = 'new';
          break;
        case 2:
          this.GoodsType = 'sell';
          break;
      }
      // 让俩个tab的index相等，保证他们的点击样式一致
      this.$refs.tab_control1.currentIndex = index;
      this.$refs.tab_control2.currentIndex = index;
    },
  },
  created() {
    // 请求获取数据
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.imgLoadCallBack = () => {
      refresh();
    };
    this.$bus.$on('imgLoaded', this.imgLoadCallBack);
    //监听img加载完成，加载完成就刷新Scroll
    //   使用mixin导入
    this.$bus.$on('isScroll', ({ y: scrollY }) => {
      this.isTabControlFixed = -scrollY >= this.tabControlOffsetTop;
    });
    this.$bus.$on('pullingUp', () => {
      this.getHomeGoods(this.GoodsType);
    });
    this.$bus.$on('homeSwiperImgLoad', () => {
      this.tabControlOffsetTop = this.$refs.tab_control2.$el.offsetTop - 44;
    });
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 400);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
    console.log(this.saveY);
    // console.log('离开');
    this.$bus.$off('imgLoaded', this.imgLoadCallBack);
    this.$bus.$off('homeSwiperImgLoad');
  },
};
</script>

<style scoped>
#home {
  height: calc(100vh - 44px);
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.wrapper {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
.tabControlFixed2 {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
</style>
