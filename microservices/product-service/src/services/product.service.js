const { Product } = require("../models");
const { BadRequestException } = require("../utils").Exceptions;

class ProductService {
  async getProducts() {
    return await Product.find();
  }

  async getProductById(id) {
    if (!id) {
      throw new BadRequestException("Id must be sent");
    }

    return await Product.findById(id);
  }

  async createProduct(product) {
    if (!product) {
      throw new BadRequestException("Invalid product");
    }

    await Product.create([product]);

    return product;
  }
}

module.exports = new ProductService();
