const { HttpStatusCode } = require("../helpers");

module.exports = (err, req, res, next) => {
  const { statusCode, message } = err;
  return res.status(statusCode || HttpStatusCode.INTERNAL_SERVER_ERROR).send({
    status: statusCode || HttpStatusCode.INTERNAL_SERVER_ERROR,
    message: message || "Internal server error"
  });
};
