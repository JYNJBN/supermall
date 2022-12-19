import { request } from 'network/request';

export function getGoodDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    },
  });
}
export function getRecommendDate() {
  return request({
    url: '/recommend',
  });
}
//封装成类是因为数据在响应数据的各个地方
export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.nowPrice = itemInfo.highNowPrice;
    this.desc = itemInfo.desc;
    this.realPrice = itemInfo.lowNowPrice;
    this.discountBgColor = itemInfo.discountBgColor;
    //数组
    this.columns = columns;
    this.services = services;
  }
}
export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
