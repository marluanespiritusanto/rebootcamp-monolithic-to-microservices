const productRouter = require("express").Router();
const { ProductController } = require("../controllers");

productRouter.get("/", ProductController.getProducts);
productRouter.get("/:productId", ProductController.getProductById);
productRouter.post("/", ProductController.createProduct);

module.exports = productRouter;
