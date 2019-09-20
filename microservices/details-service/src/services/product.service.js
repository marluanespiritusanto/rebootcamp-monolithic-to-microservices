const { Product } = require("../models");
const { BadRequestException } = require("../utils").Exceptions;

class ProductService {
  async getProductById(id) {
    if (!id) {
      throw new BadRequestException("Id must be sent");
    }

    return await Product.findById(id);
  }
}

module.exports = new ProductService();
