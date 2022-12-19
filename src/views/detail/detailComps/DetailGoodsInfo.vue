<template>
  <div
    class="detail-info"
    v-if="Object.keys(detailInfo).length !== 0 && detailInfo.detailImage[0].list !== null"
  >
    <div class="info-top">
      <div class="info-desc clear-fix">
        <div class="start"></div>
        <div class="desc">{{ detailInfo.desc }}</div>
        <div class="end"></div>
      </div>
    </div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  data() {
    return {
      imgLength: 0,
      counter: 0,
    };
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      this.counter += 1;
      if (this.counter === this.imgLength) {
        this.$emit('goodsInfoImgLoad');
      }
    },
  },
  watch: {
    detailInfo() {
      this.imgLength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>

<style scoped>
.info-top {
  background-color: white;
  padding-bottom: 1vh;
  margin-bottom: 0.5vh;
}
.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-list img {
  width: 100%;
  /* height: 400px; */
}
</style>
