const fs = require("fs");
const FILE = __dirname + "/../data/products.json";
const _products = require(FILE);
const { BadRequestException } = require("../utils").Exceptions;

class ProductService {
  constructor() {
    this.products = _products;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    if (!id) {
      throw new BadRequestException("Id must be sent");
    }

    return this.products.find(p => p.id == id);
  }

  createProduct(product) {
    if (!product) {
      throw new BadRequestException("Invalid product");
    }

    const products = this.products;
    const lastProduct = products[products.length - 1];
    product.id = lastProduct.id + 1;
    products.push(product);

    fs.writeFileSync(FILE, JSON.stringify(products));

    return product;
  }
}

module.exports = new ProductService();
