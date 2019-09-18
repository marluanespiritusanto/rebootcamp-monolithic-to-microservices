const express = require("express");
const app = express();
const { ProductController } = require("./controllers");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send({ message: "hello world!" }));
app.get("/api/v2/product", ProductController.getProducts);
app.get("/api/v2/product/:productId", ProductController.getProductById);
app.post("/api/v2/product", ProductController.createProduct);

module.exports = app;
