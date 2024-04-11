import os
from flask import Flask, render_template
from threading import Thread
from .scraper import run_scraper  # Import the scraper function

app = Flask(__name__, static_folder="../../frontend/build/static", template_folder="../../frontend/build")

@app.route('/', defaults={'path': ""})
@app.route('/<path:path>')
def index_page(path):
    return render_template("index.html")

#Import controllers here
from controller.auth_controller import *
from controller.snowtrace_controller import *

# Run the scraper in a separate thread
scraper_thread = Thread(target=run_scraper)
scraper_thread.daemon = True
scraper_thread.start()