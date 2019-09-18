const fs = require("fs");
const FILE = __dirname + "/../data/products.json";
const _products = require(FILE);

class ProductService {
  constructor() {
    this.products = _products;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find(p => p.id == id);
  }

  addProduct(product) {
    const products = this.products;
    const lastProduct = products[products.length - 1];
    product.id = lastProduct.id + 1;
    products.push(product);
    fs.writeFileSync(FILE, JSON.stringify(products));
    return true;
  }
}

module.exports = new ProductService();
