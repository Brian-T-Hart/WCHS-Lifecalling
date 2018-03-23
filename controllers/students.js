// Dependencies
var express = require("express");
var path = require("path");
var router = express.Router();

// requiring our models
var db = require("../models");

// post to get all products from a particular rep
router.post('/updateStrengths', (req, res, next) => {
    console.log("_________________________________");
    console.log("updateStrengths..index.routes.js");
    console.log("_________________________________");
    db.students.update({
        strengths: req.body.strengths
    },
    {
        where: {
            id: req.body.id
        }
    })
    .then(function (results) {
        console.log("results from updateStrengths..index.js ", results);
        res.json(results)
    });
});

module.exports = router;