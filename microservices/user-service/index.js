const { PORT, SERVICE_NAME } = require("./src/config");
const app = require("./src/app");

app.listen(PORT, () => {
  console.log(`${SERVICE_NAME} running on port ${PORT}`);
});
