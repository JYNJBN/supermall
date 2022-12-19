import { request } from '@/network/request';

export function getHomeMultidata() {
  return request({
    url: '/home/multidata',
  });
}
//type是请求想要的对应项的数据 如流行等
//page是页数
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page,
    },
  });
}
