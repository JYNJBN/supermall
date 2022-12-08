<template>
  <div class="recommend">
    <home-recommend-item-view class="recommend-item" v-for="item in recommend" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" />
        <div>{{ item.title }}</div>
      </a>
    </home-recommend-item-view>
  </div>
</template>

<script>
import HomeRecommendItemView from 'views/home/childComps/HomeRecommendItemView';

export default {
  name: 'HomeRecommendView',
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    HomeRecommendItemView,
  },
};
</script>

<style scoped lang="less">
.recommend {
  display: flex;
  width: 100%;
  margin-top: 10px;
  border-bottom: 7px solid #e3e3e3;
  .recommend-item {
    flex: 1;
    text-align: center;
    padding: 10px;
    img {
      width: 100%;
      padding-bottom: 10px;
    }
  }
}
</style>
