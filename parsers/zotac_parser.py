import pprint

import requests
from bs4 import BeautifulSoup

from memory_express import parse_gpu_series, parse_gpu_model, GPUSchema

# Zotack block parsers. Need to overcome it
def parse_gpus(soup):
    gpus = []
    base_url = "https://www.zotacstore.com/"
    items = soup.find_all("li", class_="product-item")
    for item in items:
        brand = "zotac"

        item_link_elem = item.find('a', class_="product-item-link")
        model_full: str = item_link_elem.text.strip()
        series: str = parse_gpu_series(model_full)
        model: str = parse_gpu_model(model_full)
        url = f"{base_url}{item_link_elem.attrs['href'].attrs['href']}"

        if any([not model, not series, not brand]):
            print("=====Some data was not found in:", GPUSchema(brand.lower(), model, series, url))
        if not series:
            continue
        gpu = GPUSchema(brand.lower(), model, series, url)
        gpus.append(gpu)
    return gpus


url = "https://www.zotacstore.com/us/graphics-cards?product_list_mode=grid&product_list_limit=36"
headers = {'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0'}
page = requests.get(url, headers=headers)
soup = BeautifulSoup(page.content, "html.parser")
gpus = parse_gpus(soup)

pp = pprint.PrettyPrinter(indent=2)
pp.pprint([gpu.__dict__ for gpu in gpus])
