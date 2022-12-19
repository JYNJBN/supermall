<template>
  <swiper>
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" @load="swiperImgLoad" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper';

export default {
  name: 'DetailSwiper',
  components: { Swiper, SwiperItem },
  data() {
    return {
      topImagesLength: 0,
      count: 0,
    };
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    topImages() {
      this.topImagesLength = this.topImages.length;
    },
  },
  methods: {
    swiperImgLoad() {
      this.count += 1;
      if (this.count === this.topImagesLength) {
        this.$emit('swiperImgLoad');
      }
    },
  },
};
</script>

<style scoped></style>
