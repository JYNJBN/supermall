<template>
  <div class="toast" v-show="toastShow">{{ msg }}</div>
</template>

<script>
export default {
  name: 'Toast',
  /*props: {*/
  /*  msg: {*/
  /*    type: String,*/
  /*    default() {*/
  //       return '';
  //     },
  //   },
  //   toastShow: {
  //     type: Boolean,
  //     default() {
  //       return false;
  //     },
  //   },
  // },
  data() {
    return {
      msg: '',
      toastShow: false,
    };
  },
  methods: {
    show(msg = '默认信息', time = 2000) {
      this.msg = msg;
      this.toastShow = true;
      setTimeout(() => {
        this.toastShow = false;
      }, time);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(31, 31, 31, 0.7);
  color: white;
  font-size: 20px;
  z-index: 9999;
  padding: 10px;
}
</style>
