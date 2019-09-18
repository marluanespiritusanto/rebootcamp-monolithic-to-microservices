from app import app, mongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import jsonify, flash, request

@app.route('/product/add', methods=['POST'])
def add_user():
	_json = request.json
	_name = _json['productName']
	_image = _json['image']
	_from = _json['from']
	_nutrients = _json['nutrients']
	_quantity = _json['quantity']
	_price = _json['price']
	_organic = _json['organic']
	_description = _json['description']

	if request.method == 'POST':
		id = mongo.db.product.insert(
            {
                'productName': _name, 
                'image': _image, 
                'from': _from, 
                'quantity': _quantity, 
                'nutrients': _nutrients,
                'quantity': _quantity,
                'price': _price,
                'organic': _organic,
                'description': _description
            }
        )
		resp = jsonify('Product added successfully!')
		resp.status_code = 200
		return resp
	else:
		return not_found()
				
@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status': 404,
        'message': 'Not Found: ' + request.url,
    }
    resp = jsonify(message)
    resp.status_code = 404

    return resp

if __name__ == "__main__":
    app.run()