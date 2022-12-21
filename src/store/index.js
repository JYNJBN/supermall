import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  cartList: [],
};
const actions = {
  async addCart(context, payload) {
    let oldProduct = null;
    oldProduct = state.cartList.find((item) => item.iid === payload.iid);
    // 如果有重复的产品让它的数量加一
    if (oldProduct) {
      context.commit('addCartCount', oldProduct);
      return '商品数量加一';
    } else {
      context.commit('addProduct', payload);
      return '添加到购物车';
    }
  },
};
const mutations = {
  addCartCount(state, oldProduct) {
    oldProduct.count += 1;
  },
  addProduct(state, payload) {
    payload.count = 1;
    state.cartList.push(payload);
  },
};
const getters = {
  cartListLength(state) {
    return state.cartList.length;
  },
};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
