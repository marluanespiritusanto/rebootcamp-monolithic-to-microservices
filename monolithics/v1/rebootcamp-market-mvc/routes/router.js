const router = require("express").Router();
const { ProductRoutes, HomeRoutes } = require("./");

router.use("/product", ProductRoutes);
router.use("/", HomeRoutes);

module.exports = router;
