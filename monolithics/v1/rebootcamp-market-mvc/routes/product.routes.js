const productRouter = require("express").Router();
const { ProductController } = require("../controllers");

productRouter.get("", ProductController.getProductById);
productRouter.get("/add", ProductController.getAdd);
productRouter.post("/add", ProductController.postAdd);

module.exports = productRouter;
