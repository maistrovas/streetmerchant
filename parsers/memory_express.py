import pprint
from dataclasses import dataclass
from decimal import Decimal

import requests
import ujson as ujson
from bs4 import BeautifulSoup
from pattern.text.search import search
from slugify import slugify

from config import GPU_SERIES, PRODUCT_MODELS


@dataclass(unsafe_hash=True)
class GPUSchema:
    brand: str
    model: str
    series: str
    url: str


def parse_gpu_series(stock_message: str) -> str:

    series = ""
    for _series in GPU_SERIES:
        if search(_series, stock_message):
            series = slugify(_series)
            series = series.replace("-", "")
            break
    return series


def parse_gpu_model(model_full: str) -> str:
    model = ""
    for _model in PRODUCT_MODELS:
        if search(_model, model_full):
            model = _model
            break
    return model


def parse_gpus(soup):
    gpus = []
    base_url = "https://www.memoryexpress.com"
    items = soup.find_all("div", class_="c-shca-list-item")
    for item in items:
        body = item.find(class_="c-shca-list-item__body")
        brand_elem = body.find("img") or body.find("strong")
        brand = brand_elem.attrs.get("alt") or brand_elem.text.strip()
        mode_elem = body.find(class_="c-shca-list-item__body-main").find("div")
        model_full: str = mode_elem.text.strip()
        series: str = parse_gpu_series(model_full)
        model: str = parse_gpu_model(model_full)
        url_elem = body.find("a")
        url = f"{base_url}{url_elem.attrs['href']}"
        if any([not model, not series, not brand]):
            print("=====Some data was not found in:", GPUSchema(brand.lower(), model, series, url))
        if not series:
            continue
        gpu = GPUSchema(brand.lower(), model, series, url)
        gpus.append(gpu)
    return gpus


def calc_gpu_eth_coef(price: Decimal, hash_rate: Decimal):
    return price / hash_rate


# def get_auth_token():
#     auth_url = 'https://api.amazon.com/auth/token'
#     payload = {
#         "app_name": "com.amazon.avod.thirdpartyclient", # ???
#         "app_version": "130050002",
#         "source_token_type": "refresh_token",
#         "source_token": "Atnr|EwICIABc3Mm2NVlGpvAOyXXs1-YKJMeSqwE-J50NizKHRF3LMYFEkBUKpNUFRQkK6qvBlnuWKwRaJGNIzncp2"
#                         "Yq8F5r9xfJjypDOZpiQtuYAr8wIuLCj_5gT5lem8YVawgQhiiwbLIRHhlzmCLP9lkrYLmVBT3UGUBDjX9HVt6mkNnK"
#                         "R2Y2T0Vd7vga7R6zknqQzYSyad16JXrG6qIJAMTLqNWwhSCFaAXI2emLhoDf9JhEYjQ",
#         "requested_token_type": "access_token"
#     }
#     res = requests.post(auth_url, headers={'Content-Type': 'application/json'}, data=ujson.dumps(payload))
#     if not res or 'access_token' not in res.text:
#         return None
#     data = ujson.loads(res.text)
#     """Will return something like
#     {'access_token': 'Atna|EwICIA6lxlwvBPVdyWIad6PwTTe2u8X_sC6omIBt3G-ympLnSasOPVgYutqRBD3lQoKOBIBB4b92OEePW_yJFWCcqJzWr_t0_BrwVa-NqW2Fb2BnAUhjgsrTSBw6jnb-s3fW1P0kA5XFKOt1kJWzjIMMDSl8Jut83yyfLDy4kWace1KJYBKOSwlEiu5pI2pqGlUFyfunadeNwbuwQD-l2kx0pejSWF6RQN80jWTJ6_JSHotB5A', 'token_type': 'bearer', 'expires_in': 3600}
#     """
#     return data['access_token']


if __name__ == "__main__":

    radean_url = "https://www.memoryexpress.com/Category/VideoCards?FilterID=e4687ca3-da8e-933d-8b5a-be30ca32b88f&Sort=Price&PageSize=120&ViewMode=List"

    rad_page = requests.get(radean_url)
    soup = BeautifulSoup(rad_page.content, "html.parser")
    rad_gpus = parse_gpus(soup)

    nvidia_url = "https://www.memoryexpress.com/Category/VideoCards?FilterID=faa2dcb0-7bbe-abfc-70e8-8c8274c23fb0&Sort=Price&PageSize=120&ViewMode=List"
    nvidia_page = requests.get(nvidia_url)
    soup = BeautifulSoup(nvidia_page.content, "html.parser")
    nvidia_gpus = parse_gpus(soup)

    gpus = rad_gpus + nvidia_gpus

    pp = pprint.PrettyPrinter(indent=2)
    pp.pprint([gpu.__dict__ for gpu in gpus])
