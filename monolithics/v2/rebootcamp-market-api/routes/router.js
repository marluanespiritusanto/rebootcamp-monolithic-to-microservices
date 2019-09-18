const cors = require("cors");
const router = require("express").Router();
const apiRoute = require("express").Router();
const { ProductRoutes, HomeRoutes } = require("./");
const {
  NotFoundMiddleware,
  ErrorHandlerMiddleware
} = require("../middlewares");

apiRoute.use(cors());

apiRoute.use("/", HomeRoutes);
apiRoute.use("/product", ProductRoutes);

router.use("/api/v1", apiRoute);
router.use(NotFoundMiddleware);
router.use(ErrorHandlerMiddleware);

module.exports = router;
