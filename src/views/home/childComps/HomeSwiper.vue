<template>
  <swiper>
    <swiper-item v-for="item in banner" :key="item.image">
      <a :href="item.link"><img :src="item.image" :alt="item.title" /></a>
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
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped></style>
