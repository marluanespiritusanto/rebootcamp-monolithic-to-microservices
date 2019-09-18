const { ProductService: _productService } = require("../services");

class ProductController {
  async getProductById(req, res) {
    const { id } = req.query;
    const product = await _productService.getProductById(id);
    return res.render("product/detail", {
      product,
      pageTitle: "Detail",
      path: "/detail"
    });
  }

  getAdd(req, res) {
    return res.render("product/add", {
      pageTitle: "Add",
      path: "/add",
      layout: "main"
    });
  }

  postAdd(req, res) {
    const { body: product } = req;
    _productService.addProduct(product);
    return res.redirect("/");
  }
}

module.exports = new ProductController();
