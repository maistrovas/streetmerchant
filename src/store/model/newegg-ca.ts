import {Store} from './store';
import fetch from 'node-fetch';

export const NeweggCa: Store = {
  currency: '$',
  labels: {
    captcha: {
      container: 'body',
      text: ['are you a human?'],
    },
    inStock: {
      container: 'div#ProductBuy .btn-primary',
      text: ['add to cart'],
    },
    maxPrice: {
      container: 'div#app div.product-price > ul > li.price-current > strong',
      euroFormat: false,
    },
    outOfStock: [
      {
        container: '.product-inventory',
        text: [' out of stock.'],
      },
      {
        container: '.product-flag',
        text: ['out of stock '],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.newegg.ca/p/N82E16824475043?Item=N82E16824475043&cm_sp=Homepage_MKPL-_-P3_24-475-043-_-12302020',
    },
    {
      brand: 'amd',
      itemNumber: '19-113-663',
      model: '5950x',
      series: 'ryzen5950',
      url: 'https://www.newegg.ca/amd-ryzen-9-5950x/p/N82E16819113663',
    },
    {
      brand: 'amd',
      itemNumber: '19-113-664',
      model: '5900x',
      series: 'ryzen5900',
      url: 'https://www.newegg.ca/amd-ryzen-9-5900x/p/N82E16819113664',
    },
    {
      brand: 'amd',
      itemNumber: '19-113-665',
      model: '5800x',
      series: 'ryzen5800',
      url: 'https://www.newegg.ca/amd-ryzen-7-5800x/p/N82E16819113665',
    },
    {
      brand: 'amd',
      itemNumber: '19-113-666',
      model: '5600x',
      series: 'ryzen5600',
      url: 'https://www.newegg.ca/amd-ryzen-5-5600x/p/N82E16819113666',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-522',
      model: 'dual',
      series: '2060',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-2060-gv-n2060d6-6gd/p/N82E16814932522?Item=N82E16814932522',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-448',
      model: 'dual fan',
      series: '1660',
      url: 'https://www.newegg.ca/evga-geforce-gtx-1660-06g-p4-1067-kr/p/N82E16814487448?Item=N82E16814487448',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-482',
      model: 'gaming',
      series: '1660super',
      url: 'https://www.newegg.ca/zotac-geforce-gtx-1660-super-zt-t16620f-10l/p/N82E16814500482?Item=N82E16814500482',
    },
    {
      brand: 'sapphire',
      itemNumber: '14-202-415',
      model: 'gaming',
      series: 'rx6600',
      url: 'https://www.newegg.ca/sapphire-radeon-rx-6600-11310-04-20g/p/N82E16814202415?Item=N82E16814202415',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-475',
      model: 'oc',
      series: '1660super',
      url: 'https://www.newegg.ca/msi-geforce-gtx-1660-super-gtx-1660-super-ventus-xs-oc/p/N82E16814137475?Item=N82E16814137475',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-224',
      model: 'mech 2x',
      series: '1660super',
      url: 'https://www.newegg.ca/gigabyte-geforce-gtx-1660-super-gv-n166soc-6gd/p/N82E16814932224?Item=N82E16814932224',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-353',
      model: 'phoenix',
      series: '1660super',
      url: 'https://www.newegg.ca/asus-geforce-gtx-1660-super-ph-gtx1660s-o6g/p/N82E16814126353?Item=N82E16814126353',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-352',
      model: 'dual',
      series: '1660super',
      url: 'https://www.newegg.ca/asus-geforce-gtx-1660-super-dual-gtx1660s-o6g-evo/p/N82E16814126352?Item=N82E16814126352',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-530',
      model: '12gb',
      series: '2060',
      url: 'https://www.newegg.ca/zotac-geforce-rtx-2060-zt-t20620f-10m/p/N82E16814500530?Item=N82E16814500530',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-359',
      model: 'gaming',
      series: '1660super',
      url: 'https://www.newegg.ca/asus-geforce-gtx-1660-super-tuf-gtx1660s-o6g-gaming/p/N82E16814126359?Item=N82E16814126359',
    },
    {
      brand: 'sapphire',
      itemNumber: '14-202-409',
      model: 'pulse',
      series: 'rx6600',
      url: 'https://www.newegg.ca/sapphire-radeon-rx-6600-11310-01-20g/p/N82E16814202409?Item=N82E16814202409',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-690',
      model: 'mech 2x',
      series: 'rx6600',
      url: 'https://www.newegg.ca/msi-radeon-rx-6600-mech-2x-8g/p/N82E16814137690?Item=N82E16814137690',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-632',
      model: 'oc',
      series: '3060',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3060-rtx-3060-ventus-2x-12g-oc/p/N82E16814137632?Item=N82E16814137632',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-631',
      model: 'oc',
      series: '3060',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3060-rtx-3060-ventus-3x-12g-oc/p/N82E16814137631?Item=N82E16814137631',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-538',
      model: 'gaming',
      series: '1660ti',
      url: 'https://www.newegg.ca/asus-geforce-gtx-1660-ti-tuf-gtx1660ti-o6g-ev/p/N82E16814126538?Item=N82E16814126538',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-548',
      model: 'dual',
      series: '2060',
      url: 'https://www.newegg.ca/asus-geforce-rtx-2060-dual-rtx2060-o12g-evo/p/N82E16814126548?Item=N82E16814126548',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-535',
      model: 'eagle',
      series: 'rx6600',
      url: 'https://www.newegg.ca/gigabyte-radeon-rx-6600-gv-r66eagle-8gd/p/N82E16814932535?Item=N82E16814932535',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-758',
      model: 'oc',
      series: '3060',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3060-rtx-3060-aero-itx-12g-oc/p/N82E16814137758?Item=N82E16814137758',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-630',
      model: 'gaming x',
      series: '3060',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3060-rtx-3060-gaming-x-12g/p/N82E16814137630?Item=N82E16814137630',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-509',
      model: 'gaming',
      series: '3060',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-gv-n3060gaming-oc-12gd/p/N82E16814932509?Item=N82E16814932509',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-433',
      model: 'gaming oc',
      series: '3060',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-gv-n3060gaming-oc-12gd/p/N82E16814932433?Item=N82E16814932433',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-532',
      model: 'dual',
      series: '3060',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3060-ph-rtx3060-12g-v2/p/N82E16814126532?Item=N82E16814126532',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-532',
      model: 'oc',
      series: '3060',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-gv-n3060vision-oc-12gd/p/N82E16814932532?Item=N82E16814932532',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-482',
      model: 'oc',
      series: '3060',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-gv-n3060vision-oc-12gd/p/N82E16814932482?Item=N82E16814932482',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-527',
      model: 'gaming',
      series: 'rx6600xt',
      url: 'https://www.newegg.ca/asus-radeon-rx-6600-xt-rog-strix-rx6600xt-o8g-gaming/p/N82E16814126527?Item=N82E16814126527',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-432',
      model: 'oc',
      series: '3060',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-gv-n3060vision-oc-12gd/p/N82E16814932432?Item=N82E16814932432',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-531',
      model: 'eagle oc',
      series: '3060',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-gv-n3060eagle-oc-12gd/p/N82E16814932531?Item=N82E16814932531',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-434',
      model: 'eagle oc',
      series: '3060',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-gv-n3060eagle-oc-12gd/p/N82E16814932434?Item=N82E16814932434',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-477',
      model: 'oc',
      series: '2060',
      url: 'https://www.newegg.ca/msi-geforce-rtx-2060-super-rtx-2060-super-ventus-gp-oc/p/N82E16814137477?Item=N82E16814137477',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-556',
      model: 'gaming',
      series: '1660super',
      url: 'https://www.newegg.ca/msi-geforce-gtx-1660-super-gtx-1660-super-gaming/p/N82E16814137556?Item=N82E16814137556',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-524',
      model: 'dual',
      series: '3060',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3060-dual-rtx3060-o12g-v2/p/N82E16814126524?Item=N82E16814126524',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-508',
      model: 'aorus',
      series: '3060',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-gv-n3060aorus-e-12gd/p/N82E16814932508?Item=N82E16814932508',
    },
    {
      brand: 'pny',
      itemNumber: '14-133-846',
      model: 'verto',
      series: '3060ti',
      url: 'https://www.newegg.ca/pny-geforce-rtx-3060-ti-vcg3060t8ldfbpb1/p/N82E16814133846?Item=N82E16814133846',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-508',
      model: 'gaming',
      series: '3060',
      url: 'https://www.newegg.ca/zotac-geforce-rtx-3060-zt-a30600h-10m/p/N82E16814500508?Item=N82E16814500508',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-673',
      model: 'ventus 2x',
      series: '3060ti',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3060-ti-rtx-3060-ti-ventus-2x-8g-ocv1-lhr/p/N82E16814137673?Item=N82E16814137673',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-349',
      model: 'dual',
      series: '2060',
      url: 'https://www.newegg.ca/asus-geforce-rtx-2060-dual-rtx2060-o6g-evo/p/N82E16814126349?Item=N82E16814126349',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-455',
      model: 'eagle oc',
      series: '3060ti',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-ti-gv-n306teagle-oc-8gd/p/N82E16814932455?Item=N82E16814932455',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-680',
      model: 'oc',
      series: '3060ti',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3060-ti-rtx-3060-ti-ventus-3x-8g-oc-lhr/p/N82E16814137680?Item=N82E16814137680',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-506',
      model: 'aorus',
      series: '3060',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-gv-n3060aorus-e-12gd/p/N82E16814932506?Item=N82E16814932506',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-572',
      model: 'gaming',
      series: '3060',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3060-ko-rtx3060-o12g-v2-gaming/p/N82E16814126572?Item=N82E16814126572',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-672',
      model: 'gaming x',
      series: '3060ti',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3060-ti-rtx-3060-ti-gaming-x-8g-lhr/p/N82E16814137672?Item=N82E16814137672',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-523',
      model: 'gaming',
      series: '3060',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3060-tuf-rtx3060-o12g-v2-gaming/p/N82E16814126523?Item=N82E16814126523',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-522',
      model: 'gaming',
      series: '3060',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3060-rog-strix-rtx3060-o12g-v2-gaming/p/N82E16814126522?Item=N82E16814126522',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-591',
      model: 'gaming',
      series: '3060',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3060-tuf-rtx3060-o12g-demonslayer/p/N82E16814126591?Item=N82E16814126591',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-538',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070gaming-oc-8gd/p/N82E16814932538?Item=N82E16814932538',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-518',
      model: 'gaming',
      series: '3060ti',
      url: 'https://www.newegg.ca/zotac-geforce-rtx-3060-ti-zt-a30610h-10mlhr/p/N82E16814500518?Item=N82E16814500518',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-524',
      model: 'amp white',
      series: '3060ti',
      url: 'https://www.newegg.ca/zotac-geforce-rtx-3060-ti-zt-a30610f-10plhr/p/N82E16814500524?Item=N82E16814500524',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-537',
      model: 'aorus',
      series: '3070',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070aorus-m-8gd/p/N82E16814932537?Item=N82E16814932537',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-526',
      model: 'gaming',
      series: '3060ti',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3060-ti-ko-rtx3060ti-o8g-v2-gaming/p/N82E16814126526?Item=N82E16814126526',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-469',
      model: 'aorus',
      series: '3060ti',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3060-ti-gv-n306taorus-e-8gd/p/N82E16814932469?Item=N82E16814932469',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-520',
      model: 'gaming',
      series: '3060ti',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3060-ti-tuf-rtx3060ti-o8g-v2-gaming/p/N82E16814126520?Item=N82E16814126520',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-450',
      model: 'oc',
      series: '3070',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070vision-oc-8gd/p/N82E16814932450?Item=N82E16814932450',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-519',
      model: 'gaming',
      series: '3070',
      url: 'https://www.newegg.ca/zotac-geforce-rtx-3070-zt-a30700h-10plhr/p/N82E16814500519?Item=N82E16814500519',
    },
    {
      brand: 'xfx',
      itemNumber: '14-150-864',
      model: 'swft',
      series: 'rx6600',
      url: 'https://www.newegg.ca/xfx-radeon-rx-6600-rx-66xl8lfdq/p/N82E16814150864?Item=N82E16814150864',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-426',
      model: 'gaming',
      series: '3070',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070gaming-oc-8gd/p/N82E16814932426?Item=N82E16814932426',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-739',
      model: 'oc',
      series: '3070',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-ventus-3x-plus-8g-oc-lhr/p/N82E16814137739?Item=N82E16814137739',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-529',
      model: 'gaming',
      series: '3060ti',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3060-ti-rog-strix-rtx3060ti-o8g-v2-gaming/p/N82E16814126529?Item=N82E16814126529',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-519',
      model: 'gaming',
      series: '3070',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3070-tuf-rtx3070-o8g-v2-gaming/p/N82E16814126519?Item=N82E16814126519',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-451',
      model: 'eagle oc',
      series: '3070',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070eagle-oc-8gd/p/N82E16814932451?Item=N82E16814932451',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-531',
      model: 'dual',
      series: '3070',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3070-dual-rtx3070-o8g-v2/p/N82E16814126531?Item=N82E16814126531',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-449',
      model: 'gaming oc',
      series: '3070',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070gaming-oc-8gd/p/N82E16814932449?Item=N82E16814932449',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-427',
      model: 'oc',
      series: '3070',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070vision-oc-8gd/p/N82E16814932427?Item=N82E16814932427',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-533',
      model: 'gaming oc',
      series: '3070ti',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-ti-gv-n307tgaming-oc-8gd/p/N82E16814932533?Item=N82E16814932533',
    },
    {
      brand: 'pny',
      itemNumber: '14-133-845',
      model: 'gaming',
      series: '3070ti',
      url: 'https://www.newegg.ca/pny-geforce-rtx-3070-ti-vcg3070t8tfbpb1/p/N82E16814133845?Item=N82E16814133845',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-443',
      model: 'gaming',
      series: '3070ti',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-ti-gv-n307tgaming-oc-8g/p/N82E16814932443?Item=N82E16814932443',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-536',
      model: 'aorus',
      series: '3070',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-gv-n3070aorus-m-8gd-rev-1-0/p/N82E16814932536?Item=N82E16814932536',
    },
    {
      brand: 'pny',
      itemNumber: '14-133-824',
      model: 'xlr8 epic x',
      series: '3070ti',
      url: 'https://www.newegg.ca/pny-geforce-rtx-3070-ti-vcg3070t8tfxppb/p/N82E16814133824?Item=N82E16814133824',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-530',
      model: 'gaming',
      series: '3070',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3070-ko-rtx3070-o8g-v2-gaming/p/N82E16814126530?Item=N82E16814126530',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-524',
      model: 'aorus',
      series: '3070ti',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-ti-gv-n307taorus-m-8gd/p/N82E16814932524?Item=N82E16814932524',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-518',
      model: 'gaming',
      series: '3070',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3070-rog-strix-rtx3070-o8g-v2-gaming/p/N82E16814126518?Item=N82E16814126518',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-511',
      model: 'gaming',
      series: '3070ti',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3070-ti-rog-strix-rtx3070ti-o8g-gaming/p/N82E16814126511?Item=N82E16814126511',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-544',
      model: 'ftw3',
      series: '3070',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3070-08g-p5-3767-kl/p/N82E16814487544?Item=N82E16814487544',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-661',
      model: 'gaming x trio',
      series: '3070ti',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3070-ti-gaming-x-trio-8g/p/N82E16814137661?Item=N82E16814137661',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-444',
      model: 'eagle',
      series: '3070ti',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3070-ti-gv-n307teagle-oc-8gd/p/N82E16814932444?Item=N82E16814932444',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-677',
      model: 'gaming z trio',
      series: '3080',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3080-rtx-3080-gaming-z-trio-10g-lhr/p/N82E16814137677?Item=N82E16814137677',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-711',
      model: 'gaming z trio',
      series: '3080',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3080-rtx-3080-gaming-z-trio-12g-lhr/p/N82E16814137711?Item=N82E16814137711',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-530',
      model: 'aorus',
      series: '3080',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080ixeb-10gd/p/N82E16814932530?Item=N82E16814932530',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-529',
      model: 'aorus',
      series: '3080',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080ixeb-10gd/p/N82E16814932529?Item=N82E16814932529',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-701R',
      model: 'gaming trio',
      series: '3080',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3080-rtx-3080-gaming-trio-plus-10g-lhr/p/N82E16814137701R?Item=N82E16814137701R',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-525',
      model: 'aorus',
      series: '3080',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080aorusx-wb-10gd-rev2-0/p/N82E16814932525?Item=N82E16814932525',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-327',
      model: 'gaming oc',
      series: '3090',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3090-gv-n3090gaming-oc-24gd/p/N82E16814932327?Item=N82E16814932327',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-599',
      model: 'gaming',
      series: '4080',
      url: 'https://www.newegg.ca/asus-geforce-rtx-4080-tuf-rtx4080-16g-gaming/p/N82E16814126599?Item=N82E16814126599',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-554',
      model: 'gaming',
      series: '3090',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3090-ti-rog-strix-lc-rtx3090ti-o24g-gaming/p/N82E16814126554?Item=N82E16814126554',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-561',
      model: 'gaming oc',
      series: '4080',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-4080-gv-n4080gaming-oc-16gd/p/N82E16814932561?Item=N82E16814932561',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-543',
      model: 'oc',
      series: '4080',
      url: 'https://www.newegg.ca/zotac-geforce-rtx-4080-zt-d40810j-10p/p/N82E16814500543?Item=N82E16814500543',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-765',
      model: 'oc',
      series: '4080',
      url: 'https://www.newegg.ca/msi-geforce-rtx-4080-rtx-4080-16gb-ventus-3x-oc/p/N82E16814137765?Item=N82E16814137765',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-598',
      model: 'gaming',
      series: '4080',
      url: 'https://www.newegg.ca/asus-geforce-rtx-4080-tuf-rtx4080-o16g-gaming/p/N82E16814126598?Item=N82E16814126598',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-534',
      model: 'aorus',
      series: '3080ti',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-ti-gv-n308tixeb-12gd/p/N82E16814932534?Item=N82E16814932534',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-495',
      model: 'aorus',
      series: '3090',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3090-gv-n3090ixeb-24gd/p/N82E16814932495?Item=N82E16814932495',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-725',
      model: 'ventus 2x',
      series: '1660super',
      url: 'https://www.newegg.ca/msi-geforce-gtx-1660-super-gtx-1660-super-ventus-xs/p/N82E16814137725?Item=N82E16814137725',
    },
    {
      brand: 'powercolor',
      itemNumber: '14-131-791',
      model: 'fighter',
      series: 'rx6600',
      url: 'https://www.newegg.ca/powercolor-radeon-rx-6600-axrx-6600-8gbd6-3dh/p/N82E16814131791?Item=N82E16814131791',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-682',
      model: 'mech 2x',
      series: 'rx6600xt',
      url: 'https://www.newegg.ca/msi-radeon-rx-6600-xt-rx6600xt-mech2x-8goc/p/N82E16814137682?Item=N82E16814137682',
    },
    {
      brand: 'sapphire',
      itemNumber: '14-202-407',
      model: 'nitro+',
      series: 'rx6600xt',
      url: 'https://www.newegg.ca/sapphire-radeon-rx-6600-xt-11309-01-20g/p/N82E16814202407?Item=N82E16814202407',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-481',
      model: 'eagle',
      series: 'rx6600',
      url: 'https://www.newegg.ca/gigabyte-radeon-rx-6600-gv-r66eagle-8gd/p/N82E16814932481?Item=N82E16814932481',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-753',
      model: 'oc',
      series: '3070',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-ventus-3x-plus-8g-oc-lhr-bv/p/N82E16814137753?Item=N82E16814137753',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-662',
      model: 'oc',
      series: '3070ti',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3070-ti-ventus-3x-8g-oc/p/N82E16814137662?Item=N82E16814137662',
    },
    {
      brand: 'evga',
      itemNumber: '14-487-550',
      model: 'ftw3',
      series: '3070ti',
      url: 'https://www.newegg.ca/evga-geforce-rtx-3070-ti-08g-p5-3797-kl/p/N82E16814487550?Item=N82E16814487550',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-551',
      model: 'dual',
      series: '3080',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3080-tuf-rtx3080-o12g-gaming/p/N82E16814126551?Item=N82E16814126551',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-686',
      model: 'oc',
      series: '3080',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3080-rtx-3080-ventus-3x-plus-10g-oc-lhr/p/N82E16814137686?Item=N82E16814137686',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-668',
      model: 'suprim',
      series: '3070',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3070-rtx-3070-suprim-x-8g-lhr/p/N82E16814137668?Item=N82E16814137668',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-550',
      model: 'gaming',
      series: '3080',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3080-rog-strix-rtx3080-o12g-gaming/p/N82E16814126550?Item=N82E16814126550',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-650',
      model: 'gaming x trio',
      series: '3080ti',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3080-ti-rtx-3080-ti-gaming-x-trio-12g/p/N82E16814137650?Item=N82E16814137650',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-651',
      model: 'oc',
      series: '3080ti',
      url: 'https://www.newegg.ca/msi-geforce-rtx-3080-ti-rtx-3080-ti-ventus-3x-12g-oc/p/N82E16814137651?Item=N82E16814137651',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-510',
      model: 'gaming',
      series: '3080ti',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3080-ti-tuf-rtx3080ti-12g-gaming/p/N82E16814126510?Item=N82E16814126510',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-436',
      model: 'gaming',
      series: '3080ti',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-ti-gv-n308tgaming-oc-12gd/p/N82E16814932436?Item=N82E16814932436',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-505',
      model: 'aorus',
      series: '3080',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-3080-gv-n3080aorus-m-12gd/p/N82E16814932505?Item=N82E16814932505',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-454',
      model: 'gaming',
      series: '3090',
      url: 'https://www.newegg.ca/asus-geforce-rtx-3090-tuf-rtx3090-o24g-gaming/p/N82E16814126454?Item=N82E16814126454',
    },
    {
      brand: 'pny',
      itemNumber: '14-133-844',
      model: 'gaming',
      series: '4080',
      url: 'https://www.newegg.ca/pny-geforce-rtx-4080-vcg408016tfxxpb1-o/p/N82E16814133844?Item=N82E16814133844',
    },
    {
      brand: 'pny',
      itemNumber: '14-133-843',
      model: 'gaming',
      series: '4080',
      url: 'https://www.newegg.ca/pny-geforce-rtx-4080-vcg408016tfxxpb1/p/N82E16814133843?Item=N82E16814133843',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-542',
      model: 'trinity',
      series: '4080',
      url: 'https://www.newegg.ca/zotac-geforce-rtx-4080-zt-d40810d-10p/p/N82E16814500542?Item=N82E16814500542',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-768',
      model: 'ventus 3x',
      series: '4080',
      url: 'https://www.newegg.ca/msi-geforce-rtx-4080-rtx-4080-16gb-ventus-3x/p/N82E16814137768?Item=N82E16814137768',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-766',
      model: 'gaming x trio',
      series: '4080',
      url: 'https://www.newegg.ca/msi-geforce-rtx-4080-rtx-4080-16gb-gaming-x-trio/p/N82E16814137766?Item=N82E16814137766',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-541',
      model: 'amp extreme airo',
      series: '4080',
      url: 'https://www.newegg.ca/zotac-geforce-rtx-4080-zt-d40810b-10p/p/N82E16814500541?Item=N82E16814500541',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-767',
      model: 'suprim',
      series: '4080',
      url: 'https://www.newegg.ca/msi-geforce-rtx-4080-rtx-4080-16gb-suprim-x/p/N82E16814137767?Item=N82E16814137767',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-597',
      model: 'gaming',
      series: '4080',
      url: 'https://www.newegg.ca/asus-geforce-rtx-4080-rog-strix-rtx4080-o16g-gaming/p/N82E16814126597?Item=N82E16814126597',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-596',
      model: 'gaming',
      series: '4090',
      url: 'https://www.newegg.ca/asus-geforce-rtx-4090-tuf-rtx4090-24g-gaming/p/N82E16814126596?Item=N82E16814126596',
    },
    {
      brand: 'zotac',
      itemNumber: '14-500-540',
      model: 'gaming',
      series: '4090',
      url: 'https://www.newegg.ca/zotac-geforce-rtx-4090-zt-d40900j-10p/p/N82E16814500540?Item=N82E16814500540',
    },
    {
      brand: 'gigabyte',
      itemNumber: '14-932-550',
      model: 'gaming',
      series: '4090',
      url: 'https://www.newegg.ca/gigabyte-geforce-rtx-4090-gv-n4090gaming-oc-24gd/p/N82E16814932550?Item=N82E16814932550',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-594',
      model: 'gaming',
      series: '4090',
      url: 'https://www.newegg.ca/asus-geforce-rtx-4090-tuf-rtx4090-o24g-gaming/p/N82E16814126594?Item=N82E16814126594',
    },
    {
      brand: 'msi',
      itemNumber: '14-137-759',
      model: 'suprim',
      series: '4090',
      url: 'https://www.newegg.ca/msi-geforce-rtx-4090-rtx-4090-suprim-liquid-x-24g/p/N82E16814137759?Item=N82E16814137759',
    },
    {
      brand: 'asus',
      itemNumber: '14-126-593',
      model: 'gaming',
      series: '4090',
      url: 'https://www.newegg.ca/asus-geforce-rtx-4090-rog-strix-rtx4090-o24g-gaming/p/N82E16814126593?Item=N82E16814126593',
    },
  ],
  name: 'newegg-ca',
  waitUntil: 'domcontentloaded',
  // realTimeInventoryLookup: async (itemNumber: string) => {
  //   const request_url =
  //     'https://www.newegg.ca/product/api/ProductRealtime?ItemNumber=' +
  //     itemNumber;
  //   const response = await fetch(request_url);
  //   const response_json = await response.json();
  //   return (
  //     response_json.MainItem !== undefined &&
  //     response_json.MainItem.Instock === true
  //   );
  // },
};
