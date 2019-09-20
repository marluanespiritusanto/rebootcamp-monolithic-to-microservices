const { ProductService: _productService } = require("../services");

class ProductController {
  async getProductById(req, res) {
    const { productId } = req.params;
    const product = await _productService.getProductById(productId);
    return res.send(product);
  }
}

module.exports = new ProductController();
