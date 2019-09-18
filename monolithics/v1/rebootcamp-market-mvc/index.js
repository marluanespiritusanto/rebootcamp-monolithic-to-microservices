const path = require("path");
const express = require("express");
const server = express();
const { PORT, APPLICATION_NAME } = require("./config");
const router = require("./routes/router");
const expressHbs = require("express-handlebars");

server.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "main",
    partialsDir: "views/partials/",
    extname: "hbs"
  })
);
server.set("view engine", "hbs");
server.set("views", "views");

server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, "public")));

server.use("", router);

server.listen(PORT, () => {
  console.log(`${APPLICATION_NAME} running on port ${PORT}`);
});
