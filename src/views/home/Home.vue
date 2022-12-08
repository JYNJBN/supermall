<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <h1>购物街</h1>
      </template>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend-view :recommend="recommend"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control :tab-arry="['流行', '新款', '精选']"></tab-control>
    <GoodsList :Good="goods['pop'].data"></GoodsList>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from 'views/home/childComps/HomeSwiper';
import HomeRecommendView from 'views/home/childComps/HomeRecommendView';
import FeatureView from 'views/home/childComps/FeatureView';
import tabControl from 'components/content/tabControl/tabControl';
import GoodsList from 'components/content/goods/GoodsList';
import { getHomeGoods, getHomeMultidata } from 'network/home';

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
    };
  },
  created() {
    // 请求获取数据
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    //封装一层 created里应该尽量少写数据处理
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      //每次请求都让相应的商品类型的页数加一
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        //每次请求都让相应的商品数据累加
        this.goods[type].data.push(...res.data.list);
        //每次请求都让相应的商品类型的页数加一
        this.goods[type].page = page;
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 3000px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
