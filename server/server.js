const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "../config.env" });
const db = require("./db/connect");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("./routes/products"));
app.use(require("./routes/payment"));

app.listen(port, () => {
  db.connectToServer((err) => {
    if (err) console.error(err);
  });

  console.log(`Server is running on port: ${port}`);
});
