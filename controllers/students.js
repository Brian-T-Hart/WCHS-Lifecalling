// Dependencies
var express = require("express");
var path = require("path");
var router = express.Router();

// requiring our models
var db = require("../models");


router.post('/getStrengths', (req, res, next) => {
    db.students.findOne({
        where: {
            id: req.body.id,
            username: req.body.username
        }
    })
    .then(function(results) {
        res.json(results.strengths)
    })
    .catch(function (err) {
        res.json(err);
    });
})

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
    })
    .catch(function (err) {
        res.json(err);
    });
});

// post to get all products from a particular rep
router.post('/updateMBTI', (req, res, next) => {
    console.log("_________________________________");
    console.log("update myMbti..index.routes.js");
    console.log("_________________________________");
    db.students.update({
        mbti: req.body.myMbti
    },
        {
            where: {
                id: req.body.id
            }
        })
        .then(function (results) {
            console.log("results from updateStrengths..index.js ", results);
            res.json(results)
        })
        .catch(function (err) {
            res.json(err);
        });
});

module.exports = router;