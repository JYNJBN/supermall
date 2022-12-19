<template>
  <swiper>
    <swiper-item v-for="item in banner" :key="item.image">
      <a :href="item.link"><img @load="homeSwiperImgLoad" :src="item.image" :alt="item.title" /></a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper';

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      isFirstImgLoad: false,
    };
  },

  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    homeSwiperImgLoad() {
      if (!this.isFirstImgLoad) {
        this.$bus.$emit('homeSwiperImgLoad');
        this.isFirstImgLoad = true;
      }
    },
  },
};
</script>

<style scoped></style>
