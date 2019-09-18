const { HttpStatusCode } = require("../helpers");

module.exports = (req, res, next) => {
  return res
    .status(HttpStatusCode.NOT_FOUND)
    .send({ status: HttpStatusCode.NOT_FOUND, message: "Resource not found" });
};
