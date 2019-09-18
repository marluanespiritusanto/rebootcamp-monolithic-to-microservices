const homeRouter = require("express").Router();
const { HomeController } = require("../controllers");

homeRouter.get("", HomeController.index);

module.exports = homeRouter;
