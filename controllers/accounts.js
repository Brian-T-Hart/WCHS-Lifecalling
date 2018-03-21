// Dependencies
var express = require("express");
var path = require("path");
var passport = require("passport");
var router = express.Router();

router.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));


// router.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/login' }),
//     function (req, res) {
//         res.redirect('/');
//     });


module.exports = router;