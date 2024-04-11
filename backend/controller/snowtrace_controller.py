from app import app
from services.snowtrace_service import get_gas_price
from flask import request, jsonify

@app.route('/gas_price', methods=['GET'])
def gasPriceController():
    if request.method == 'GET':
        return jsonify(get_gas_price())
