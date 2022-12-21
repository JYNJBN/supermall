import Toast from 'components/common/toast/Toast';
const obj = {};

obj.install = function (Vue) {
  console.log(1);
  // 创建构造器
  const toastConstructor = Vue.extend(Toast);
  // 新建一个组件对象
  const toast = new toastConstructor();
  // 手动挂载
  toast.$mount(document.createElement('div'));
  // 添加到文档中，$el就是上面对应的div
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = toast;
};
export default obj;
