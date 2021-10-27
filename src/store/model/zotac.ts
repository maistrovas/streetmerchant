import {Store} from './store';

export const Zotac: Store = {
  backoffStatusCodes: [403, 503],
  currency: '$',
  labels: {
    inStock: {
      container: '.add-to-cart-wrapper',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'div[class="product-shop"] span[class="price"]',
      euroFormat: false,
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://store.zotac.com/zotac-gaming-geforce-rtx-2060-twin-fan-zt-t20600f-10m',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '1660ti',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-gtx-1660-ti-6gb-gddr6-zt-t16610f-10l',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '1660super',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-gtx-1660-super-twin-fan-zt-t16620f-10l',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '2070',
      url: 'https://www.zotacstore.com/us/zt-t20700e-10p-o',
    },
    {
      brand: 'zotac',
      model: 'amp white',
      series: '3060',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3060-amp-white-edition-zt-a30600f-10p',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3060',
      url:
        //removing /us/ results in a 404 error
        'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3060-twin-edge-oc-zt-a30600h-10m',
    },
    {
      brand: 'zotac',
      model: 'twin edge',
      series: '3060ti',
      url: 'zotac-gaming-geforce-rtx-3060-ti-twin-edge-oc-lhr',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3060ti',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3060-ti-amp-white-edition-lhr',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url: 'zotac-gaming-geforce-rtx-3070-twin-edge-oc-zt-a30700h-10p',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3070',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3070-amp-holo-zt-a30700f-10p',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc white',
      series: '3070',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3070-twin-edge-oc-white-edition-lhr',
    },
    {
      brand: 'zotac',
      model: 'twin edge oc',
      series: '3070',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3070-twin-edge-oc-lhr',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3070ti',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3070-ti-trinity-oc',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3070',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3070-ti-amp-holo',
    },
    {
      brand: 'zotac',
      model: 'trinity oc lhr',
      series: '3080',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3080-trinity-oc-lhr',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3080',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3080-amp-holo-lhr',
    },
    {
      brand: 'zotac',
      model: 'trinity',
      series: '3080ti',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3080-ti-trinity',
    },
    {
      brand: 'zotac',
      model: 'amp holo',
      series: '3080ti',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3080-ti-amp-holo',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3080ti',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3080-ti-trinity-oc',
    },
    {
      brand: 'zotac',
      model: 'trinity oc',
      series: '3090',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3090-trinity-oc-zt-a30900j-10p',
    },
    {
      brand: 'zotac',
      model: 'amp core holo',
      series: '3090',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3090-amp-core-holo-zt-a30900c-10p',
    },
    {
      brand: 'zotac',
      model: 'amp extreme holo',
      series: '3090',
      url: 'https://www.zotacstore.com/us/zotac-gaming-geforce-rtx-3090-amp-extreme-holo',
    },
  ],
  name: 'zotac',
};
