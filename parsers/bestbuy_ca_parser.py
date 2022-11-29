import pprint
from itertools import chain
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup

from memory_express import GPUSchema


class GpuParser40THSeries:
    def __init__(self, page: BeautifulSoup):
        self.page = page

    def parse_gpus(self):
        gpus = []
        items_4090 = soup.find_all("div", class_="x-productListItem")
        items_4080 = soup.find_all("div", class_="productListItem")
        for item in chain(items_4090, items_4080):
            brand = self._parse_brand(item)
            model = self._parse_model(item)
            series = self._parse_series(item)
            item_url = self._parse_item_url(item)

            gpu = GPUSchema(brand, model, series, item_url)
            gpus.append(gpu)
        return [gpu.__dict__ for gpu in gpus]

    @staticmethod
    def _parse_brand(item) -> str:
        item_elem = item.find("div", attrs={'data-automation': 'productItemName'})
        brand_word_position_index = 0
        item_full_name = item_elem.text
        brand: str = item_full_name.split()[brand_word_position_index]
        return brand.lower()

    @staticmethod
    def _parse_model(item) -> str:
        stop_words = {"geforce", "rtx", "16gb", "24gb", "gddr6", "gddr6x", "video", "card", "4080", "4090"}
        item_elem = item.find("div", attrs={'data-automation': 'productItemName'})
        item_full_name = item_elem.text
        item_full_name_words = {word.lower() for word in item_full_name.split()}
        model = ' '.join(list(item_full_name_words - stop_words))
        return model

    @staticmethod
    def _parse_series(item) -> str:
        item_elem = item.find("div", attrs={'data-automation': 'productItemName'})
        item_full_name = item_elem.text
        model: str = [word for word in item_full_name.split() if word.isdigit()][0]
        return model

    @staticmethod
    def _parse_item_url(item) -> str:
        item_elem = item.find("a", attrs={'itemprop': 'url'})
        _url = urlparse(item_elem.attrs['href'])
        return f"https://www.bestbuy.ca{_url.geturl()}"

    # def get_gpu(self) -> GPUSchema:
    #     return


if __name__ == "__main__":
    url = "https://www.bestbuy.ca/en-ca/collection/rtx-40-series-graphic-cards/418607?path=category%253AComputers%2B%2526%2BTablets%253Bcategory%253APC%2BComponents%253Bcategory%253AGraphics%2BCards%253Bsoldandshippedby0enrchstring%253ABest%2BBuy"
    headers = {'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0'}
    resp = requests.get(url, headers=headers)
    soup = BeautifulSoup(resp.content, "html.parser")
    parser = GpuParser40THSeries(page=soup)
    all_gpus: list = parser.parse_gpus()
    pp = pprint.PrettyPrinter(indent=2)
    pp.pprint(all_gpus)
