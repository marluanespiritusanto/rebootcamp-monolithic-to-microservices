const express = require("express");
const app = express();
const { ProductController } = require("./controllers");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/product/:productId", ProductController.getProductById);

module.exports = app;
