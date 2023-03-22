const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const generatePassword = require("./generate_password");
const app = express();
const port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/", (req, res) => {
  //post => req.body
  //get => req.query
  const options = req.body;
  const password = generatePassword(options);
  res.render("index", { password, options });
});
app.listen(port, () => {
  console.log(`the Express is running on http://localhost:${port}`);
});
