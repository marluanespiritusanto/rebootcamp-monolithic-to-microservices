const mongoose = require("mongoose");
const { PORT, SERVICE_NAME, MONGO_URI } = require("./src/config");
const app = require("./src/app");

mongoose.set("useCreateIndex", true);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`${SERVICE_NAME} running on port ${PORT}`);
    });
  })
  .catch(console.log);
