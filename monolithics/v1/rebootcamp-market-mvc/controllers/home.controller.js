const { ProductService: _productService } = require("../services");

class HomeController {
  async index(req, res) {
    const products = await _productService.getProducts();
    return res.render("home/index", {
      products,
      pageTitle: "Home",
      path: "/"
    });
  }
}

module.exports = new HomeController();
