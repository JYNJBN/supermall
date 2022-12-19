<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
import PullUp from '@better-scroll/pull-up';
export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  methods: {
    refresh() {
      // 这里是为了防止刷新scroll时scroll还未挂载
      // console.log('刷新');
      // console.log(this.scroll);
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
  },
  mounted() {
    BScroll.use(PullUp);
    // 这样写会导致有时滚动失效，这是因为在new BScroll去绑定wrapper时，前面的网络请求发送可能还没执行，导致wrapper高度不对

    this.scroll = new BScroll(this.$refs.wrapper, {
      //控制设置滚动监听模式
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      mouseWheel: true, //开启鼠标滚轮
      disableMouse: false, //启用鼠标拖动
      disableTouch: false, //启用手指触摸
    });

    this.scroll.on('scroll', (position) => {
      this.$bus.$emit('isScroll', position);
    });
    this.scroll.on('pullingUp', () => {
      this.$bus.$emit('pullingUp');
      // console.log('上拉加载更多');
    });
  },
};
</script>

<style scoped></style>
