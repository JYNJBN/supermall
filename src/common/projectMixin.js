import { debounce } from '@/common/debounce';
import BackTop from 'components/content/backtop/BackTop';

const imgLoadMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.imgLoadCallBack = () => {
      refresh();
      console.log(2);
    };
    this.$bus.$on('imgLoaded', this.imgLoadCallBack);
  },
};
const backTopMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      showBackTop: false,
    };
  },
  methods: {
    backTop() {
      console.log('回到底部');
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  },
  mounted() {
    this.$bus.$on('isScroll', ({ y: scrollY }) => {
      this.showBackTop = -scrollY > 1000;
    });
  },
};
export { imgLoadMixin, backTopMixin };
