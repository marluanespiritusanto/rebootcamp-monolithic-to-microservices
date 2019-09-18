const { ProductService: _productService } = require("../services");

class ProductController {
  async getProducts(req, res) {
    const products = await _productService.getProducts();
    return res.send(products);
  }

  async getProductById(req, res) {
    const { productId } = req.params;
    const product = await _productService.getProductById(productId);
    return res.send(product);
  }

  async createProduct(req, res) {
    const { body } = req;
    const product = await _productService.createProduct(body);
    return res.send(product);
  }
}

module.exports = new ProductController();
