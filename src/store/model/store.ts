import {Browser, PuppeteerLifeCycleEvent} from 'puppeteer';

export type Element = {
  container?: string;
  text: string[];
};

export type Pricing = {
  container: string;
  euroFormat?: boolean;
};

export type Brand =
  | 'test:brand'
  | 'captcha-deterrent'
  | 'amd'
  | 'asrock'
  | 'asus'
  | 'colorful'
  | 'corsair'
  | 'evga'
  | 'gainward'
  | 'galax'
  | 'gigabyte'
  | 'inno3d'
  | 'kfa2'
  | 'leadtek'
  | 'microsoft'
  | 'msi'
  | 'nvidia'
  | 'palit'
  | 'pny'
  | 'powercolor'
  | 'sapphire'
  | 'sony'
  | 'ubiquiti'
  | 'xfx'
  | 'zotac';

export type Series =
  | 'test:series'
  | 'captcha-deterrent'
  | 'a2000'
  | 'a4000'
  | '1660'
  | '1660ti'
  | '1660super'
  | '2060'
  | '2070'
  | '2080'
  | '3050'
  | '3060'
  | '3060ti'
  | '3070'
  | '3070ti'
  | '3080'
  | '3080ti'
  | '3090'
  | '4080'
  | '4090'
  | 'darkhero'
  | 'rx6600'
  | 'rx6600xt'
  | 'rx6800'
  | 'rx6700xt'
  | 'rx6800xt'
  | 'rx6900xt'
  | 'ryzen5600'
  | 'ryzen5800'
  | 'ryzen5900'
  | 'ryzen5950'
  | 'sonyps5c'
  | 'sonyps5de'
  | 'sf'
  | 'udm-pro'
  | 'udm-us'
  | 'udr-us'
  | 'xboxsx'
  | 'xboxss';

export type Model =
  | 'test:model'
  | 'captcha-deterrent'
  | '5600x'
  | '5800x'
  | '5900x'
  | '5950x'
  | '600 platinum'
  | '600 gold'
  | '750 platinum'
  | '12gb'
  | 'amd reference'
  | 'amp extreme holo'
  | 'amp extreme airo'
  | 'amp core holo'
  | 'amp holo'
  | 'amp white'
  | 'aorus elite'
  | 'aorus master'
  | 'aorus master type-c'
  | 'aorus xtreme'
  | 'aorus xtreme waterforce'
  | 'aorus xtreme waterforce wb'
  | 'aorus'
  | 'aorus box'
  | 'articstorm'
  | 'battle-ax'
  | 'challenger'
  | 'challenger oc'
  | 'challenger pro'
  | 'challenger pro oc'
  | 'crosshair viii'
  | 'dream machine'
  | 'dream machine pro'
  | 'dream router'
  | 'dual fan'
  | 'dual oc'
  | 'dual'
  | 'dual mini'
  | 'dual mini oc'
  | 'eagle oc'
  | 'eagle'
  | 'ekwb'
  | 'epic x'
  | 'ex'
  | 'ex gamer'
  | 'ex oc'
  | 'fighter'
  | 'founders edition'
  | 'ftw3'
  | 'ftw3 black'
  | 'ftw3 ultra'
  | 'ftw3 ultra hybrid'
  | 'ftw3 ultra hydro copper'
  | 'gamerock'
  | 'gamerock oc'
  | 'gaming oc'
  | 'gaming oc waterforce wb'
  | 'gaming oc pro'
  | 'gaming pro oc'
  | 'gaming pro'
  | 'gaming trio'
  | 'gaming z trio'
  | 'gaming x trio'
  | 'gaming x'
  | 'gaming x3'
  | 'ghost'
  | 'ghost oc'
  | 'gaming'
  | 'hellhound'
  | 'hellhound white'
  | 'hof'
  | 'hof limited edition'
  | 'hof premium'
  | 'hurricane'
  | 'ichill x2'
  | 'ichill x3'
  | 'ichill x3 red'
  | 'ichill x4'
  | 'ichill frostbite'
  | 'igame advanced'
  | 'igame advanced oc'
  | 'igame ultra oc'
  | 'igame vulcan oc'
  | 'jetstream'
  | 'jetstream oc'
  | 'kngpn hybrid'
  | 'ko oc'
  | 'ko'
  | 'master'
  | 'mech 2x'
  | 'mech 2x oc'
  | 'merc'
  | 'merc core'
  | 'merc ultra'
  | 'nitro+'
  | 'nitro+ se'
  | 'nitro+ oc'
  | 'nitro+ oc se'
  | 'nitro oc se'
  | 'nitro oc'
  | 'noctua edition'
  | 'oc'
  | 'pegasus'
  | 'pegasus oc'
  | 'phantom'
  | 'phantom gaming'
  | 'phantom gaming oc'
  | 'phantom gs'
  | 'phoenix gs oc'
  | 'phoenix gs'
  | 'phoenix 8G (LHR)'
  | 'phoenix'
  | 'ps5 console'
  | 'ps5 digital'
  | 'pulse'
  | 'pulse oc'
  | 'qick ultra'
  | 'red devil'
  | 'red dragon'
  | 'sg oc'
  | 'sg'
  | 'single fan'
  | 'stormx oc'
  | 'strix lc'
  | 'strix oc lc'
  | 'strix oc'
  | 'strix'
  | 'strix oc white'
  | 'strix white'
  | 'suprim'
  | 'suprim x'
  | 'swft'
  | 'taichi'
  | 'taichi x oc'
  | 'trinity oc'
  | 'trinity oc lhr'
  | 'trinity'
  | 'tuf oc'
  | 'tuf'
  | 'turbo'
  | 'twin edge oc white'
  | 'twin edge oc'
  | 'twin edge'
  | 'twin x2 oc'
  | 'twin x2'
  | 'uprising'
  | 'verto'
  | 'ventus 2x oc'
  | 'ventus 2x'
  | 'ventus 3x oc'
  | 'ventus 3x'
  | 'ventus 2X (LHR)'
  | 'ventus xs'
  | 'vision oc'
  | 'vision'
  | 'windforce'
  | 'x3'
  | 'x3 oc'
  | 'x trio'
  | 'xbox series s'
  | 'xbox series x'
  | 'xc black'
  | 'xc gaming'
  | 'xc3 black'
  | 'xc3 ultra'
  | 'xc3 ultra hybrid'
  | 'xc3'
  | 'xlr8 epic x'
  | 'xlr8 gaming'
  | 'xlr8 gaming uprising epic x'
  | 'xlr8 revel'
  | 'xlr8 revel epic x'
  | 'xlr8 uprising'
  | 'xtreme'
  | 'qick';

export type Link = {
  brand: Brand;
  cartUrl?: string;
  itemNumber?: string;
  labels?: Labels;
  model: Model;
  openCartAction?: (browser: Browser) => Promise<string>;
  price?: number | null;
  series: Series;
  screenshot?: string;
  url: string;
};

export type CaptchaHandlerElements = {
  challenge: string;
  input: string;
  submit: string;
  captureType?: string;
};

export type LabelQuery = Element[] | Element | string[];

export type Labels = {
  bannedSeller?: LabelQuery;
  captcha?: LabelQuery;
  captchaHandler?: CaptchaHandlerElements;
  container?: string;
  inStock?: LabelQuery;
  outOfStock?: LabelQuery;
  maxPrice?: Pricing;
};

export type CaptchaDeterrent = {
  hardLinks?: string[];
  searchUrl?: string;
  searchTerms?: string[];
};

export type StatusCodeRangeArray = Array<number | [number, number]>;

export type Store = {
  realTimeInventoryLookup?: (itemNumber: string) => Promise<boolean>;
  /**
   * The range of status codes which will trigger backoff, i.e. an increasing
   * delay between requests. Setting an empty array will disable the feature.
   * If not defined, the default range will be used: 403.
   */
  backoffStatusCodes?: StatusCodeRangeArray;
  disableAdBlocker?: boolean;
  links: Link[];
  linksBuilder?: {
    builder: (docElement: cheerio.Cheerio, series: Series) => Link[];
    ttl?: number;
    waitUntil?: PuppeteerLifeCycleEvent;
    waitForSelector?: string;
    urls: Array<{series: Series; url: string | string[]}>;
  };
  labels: Labels;
  name: string;
  currency: '£' | '$' | '€' | 'R$' | 'kr.' | '';
  setupAction?: (browser: Browser) => void;
  /**
   * The range of status codes which considered successful, i.e. without error
   * allowing request parsing to continue. Setting an empty array will cause
   * all requests to fail. If not defined, the default range will be used:
   * 0 -> 399 inclusive.
   */
  successStatusCodes?: StatusCodeRangeArray;
  waitUntil?: PuppeteerLifeCycleEvent;
  minPageSleep?: number;
  maxPageSleep?: number;

  proxyList?: string[];
  currentProxyIndex?: number;
  captchaDeterrent?: CaptchaDeterrent;
};
