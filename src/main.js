import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
import toast from '@/components/common/toast';
import VueLazyload from 'vue-lazyload';

Vue.use(toast);

Vue.use(VueLazyload, {
  loading: require('./assets/images/common/placeholder.png'),
});
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
