import pprint
from dataclasses import dataclass
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup

from memory_express import parse_gpu_series, parse_gpu_model


@dataclass(unsafe_hash=True)
class GPUSchema:
    brand: str
    itemNumber: str
    model: str
    series: str
    url: str


def parse_gpus(soup):
    gpus = []
    items = soup.find_all("div", class_="item-cell")
    for item in items:

        brand_elem = item.find("a", class_="item-brand")
        if brand_elem is None:
            continue
        brand_elem = brand_elem.find("img")
        brand = brand_elem.attrs.get("alt")

        item_number_elem = item.find("div", class_="item-stock")
        stock_or_item_number = item_number_elem.attrs["id"].split("_")[-1]

        model_elem = item.find("a", class_="item-title")
        model_full: str = model_elem.text.strip()

        series: str = parse_gpu_series(model_full)
        model: str = parse_gpu_model(model_full)

        url = urlparse(model_elem.attrs['href'])
        if any([not model, not series, not brand, not stock_or_item_number]):
            print("=====Some data was not found in:", GPUSchema(brand.lower(), stock_or_item_number, model, series, url.geturl()))
        if not series:
            continue
        gpu = GPUSchema(brand.lower(), stock_or_item_number, model, series, url.geturl())
        gpus.append(gpu)
    return gpus


if __name__ == "__main__":
    all_gpus = []
    for page_num in range(1, 3):

        url = f"https://www.newegg.ca/p/pl?N=100007708%208000%20601357282%20601321572%20601394871%20601330988%20601346498%20601329884%20601388251%20601408872&PageSize=96&Order=1&Page={page_num}"
        headers = {'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0'}
        page = requests.get(url, headers=headers)
        soup = BeautifulSoup(page.content, "html.parser")
        gpus = parse_gpus(soup)
        all_gpus += [gpu.__dict__ for gpu in gpus]
    pp = pprint.PrettyPrinter(indent=2)
    pp.pprint(all_gpus)
