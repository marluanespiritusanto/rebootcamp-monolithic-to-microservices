const express = require("express");
const server = express();
const { PORT, APPLICATION_NAME } = require("./config");
const router = require("./routes/router");

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use("", router);

server.listen(PORT, () => {
  console.log(`${APPLICATION_NAME} running on port ${PORT}`);
});
