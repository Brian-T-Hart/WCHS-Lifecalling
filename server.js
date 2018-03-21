var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");

// Set up the Express App
var app = express();
var PORT = process.env.PORT || 3001;

var db = require("./models");

// Set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vmd.api+json" }));

// Static Directory
app.use(express.static("client/build"));

// routes
var index = require("./controllers/index");
var accounts = require("./controllers/accounts");
// var students = require("./controllers/students");

app.use("/", index);
app.use("/accounts", accounts);
// app.use("/students", students);

app.listen(PORT, function () {
    console.log("App is listening on PORT " + PORT);
    db.sequelize.sync({ force: false });
});

module.exports = app;