// Dependencies
var express = require("express");
var path = require("path");
var router = express.Router();

// requiring our models
var db = require("../models");

router.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname + '../../client/build/index.html'));
});

// post to get all products from a particular rep
router.post('/testCall', (req, res, next) => {
    console.log("_________________________________");
    console.log("testCall..index.routes.js");
    console.log("_________________________________");
    db.students.findAll({
        where: {
            username: req.body.username
        }
        // order: db.sequelize.col('customer_company')
    }).then(function (results) {
        console.log("results from testCall..index.js ", results);
        res.json(results)
    });
});

module.exports = router;