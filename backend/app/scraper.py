import datetime
from selenium import webdriver
from selenium.webdriver.firefox.options import Options as FirefoxOptions
from bs4 import BeautifulSoup
import time

gas_price_data = []

def scrape_data():
    try:
        options = FirefoxOptions()
        options.add_argument("--headless")

        browser = webdriver.Firefox(options=options)
        browser.get('https://snowtrace.io/')

        time.sleep(10)

        soup = BeautifulSoup(browser.page_source, 'html.parser')

        elements = soup.find_all(class_='flex items-center')
        for element in elements:
            v2_card_header = element.find_all(class_='v2-card-header')
            header = v2_card_header[1] if len(v2_card_header) > 1 else None
            if header and header.text == 'Med Gas Price':
                gas_price_in_avax = element.find(class_='text-link break-all').text
                gas_price_in_dollar = element.find(class_='small break-all text-slate-500 ml-1').text
                gas_price_data.append({"in_avax": gas_price_in_avax, "in_dollar": gas_price_in_dollar, "datetime": datetime.datetime.now()})
                print(f'Med Gas Price: {gas_price_in_avax} ({gas_price_in_dollar})')
    except Exception as e:
        print(e)
    finally:
        browser.quit()

def run_scraper():
    while True:
        scrape_data()
        time.sleep(1800)
