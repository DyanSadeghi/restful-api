const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

global.config = require("./modules/config");
const path = require("path");

//* Connect to DB
mongoose.connect("mongodb://127.0.0.1:27017/restful");
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));


const apiRouter = require("./modules/routes/api");
const webRouter = require("./modules/routes/web");

app.use("/", webRouter);
app.use("/api", apiRouter);

app.listen(config.port, () => {
  console.log(`Server Is Running at Port ${config.port}`);
});
