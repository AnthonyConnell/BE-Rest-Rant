// MODULES AND GLOBALS
require("dotenv").config();
const express = require("express");
const methodOverride = require('method-override')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// EXPRESS SETTINGS
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static('public'))
app.use(methodOverride('_method'))

// CONTROLLERS AND ROUTES
app.use("/places", require("./controllers/places.js"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Create a homepage
app.get("/", function (req, res) {
  res.render("home");
});

app.post('/', (req, res) => {
  res.json(req.body)
})

// Wild card route - ensures user/client gets a graceful message that the path doesn't exist
app.get("*", (req, res) => {
  res.render("error404");
});

// Listen for Connections - keeps server open
app.listen(process.env.PORT, function () {
  console.log("You summoned me?");
});