from configuration import app, mongo
from flask import jsonify, request


@app.route('/', methods=['GET'])
def get():
    return 'Hello world!'


@app.route('/product/create', methods=['POST'])
def add_user():
    json = request.json
    _productName = json['productName']
    _image = json['image']
    _from = json['from']
    _nutrients = json['nutrients']
    _quantity = json['quantity']
    _price = json['price']
    _organic = json['organic']
    _description = json['description']

    mongo.db.products.insert_one(
        {
            'productName': _productName,
            'image': _image,
            'from': _from,
            'nutrients': _nutrients,
            'quantity': _quantity,
            'price': _price,
            'organic': _organic,
            'description': _description
        }
    )

    resp = jsonify({'message': 'Product created'})
    resp.status_code = 200

    return resp


if __name__ == '__main__':
    app.run(host='0.0.0.0')
