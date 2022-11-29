import pprint
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup

from memory_express import GPUSchema, parse_gpu_series, parse_gpu_model


class GpuParser:

    def __init__(self, page: BeautifulSoup):
        self.page = page

    def parse_gpus(self):
        gpus = set()
        items = soup.find_all("div", class_="productTemplate")
        for item in items:
            brand = self._parse_brand(item)
            model = self._parse_model(item)
            series = self._parse_series(item)
            item_url = self._parse_item_url(item)

            gpu = GPUSchema(brand, model, series, item_url)
            if any([not model, not series, not brand]):
                print("=====Some data was not found in:", GPUSchema(brand.lower(), model, series, item_url))
            if not series:
                continue
            gpus.add(gpu)
        return gpus

    @staticmethod
    def _parse_brand(item) -> str:
        try:
            item_elem = item.find("div", class_="pq-img-manu_logo_box")
            brand = item_elem.img.attrs.get("alt")
        except AttributeError:
            return ""
        return brand.lower()

    @staticmethod
    def _parse_model(item) -> str:
        item_elem = item.find("span", class_="productTemplate_title")
        full_name = item_elem.a.text
        model: str = parse_gpu_model(full_name)
        return model

    @staticmethod
    def _parse_series(item) -> str:
        item_elem = item.find("span", class_="productTemplate_title")
        full_name = item_elem.a.text
        series: str = parse_gpu_series(full_name)
        return series

    @staticmethod
    def _parse_item_url(item) -> str:
        item_elem = item.find("span", class_="productTemplate_title")
        _url = urlparse(item_elem.a.attrs['href'])
        if _url:
            query_params = "&".join(_url.query.split("&")[0:-1])
            _url = f"{_url.scheme}://{_url.netloc}{_url.path}?{query_params}"
        return _url


if __name__ == "__main__":
    all_gpus = set()
    page_num = 1
    while True:
        url = f"https://www.canadacomputers.com/index.php?cPath=43_557_559&sf=:3_2,3_3,3_7,3_8,3_9,3_10,3_11,3_12,3_13,3_15,3_18,3_19,3_20,3_21&mfr=&pr=&ajax=true&page={page_num}"
        headers = {'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0'}
        resp = requests.get(url, headers=headers)
        soup = BeautifulSoup(resp.content, "html.parser")
        parser = GpuParser(page=soup)
        gpus: set = parser.parse_gpus()
        if not gpus:
            break
        all_gpus |= gpus
        page_num += 1

    ppr = pprint.PrettyPrinter(indent=2)
    ppr.pprint([gpu.__dict__ for gpu in all_gpus])
