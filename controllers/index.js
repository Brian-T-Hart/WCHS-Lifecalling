// Dependencies
var express = require("express");
var path = require("path");
var router = express.Router();

// requiring our models
var db = require("../models");

router.get('*', (req, res, next) => {
	res.sendFile(path.join(__dirname + '../../client/build/index.html'));
});

module.exports = router;