const bcrypt = require("bcrypt");
const db = require("../models");
const express = require("express");
const passport = require("passport");
const router = express.Router();
const saltRounds = 10;

// ALL links in this file get prepended with /account
// ==================================================

// this is handling the login authentication
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  function(req, res) {
    res.json({
      username: req.user.username,
      token: req.user.token,
      isAdmin: req.user.isAdmin
    });
  }
);

// this is handling the registration
router.post(
  "/register",
  passport.authenticate("local-register", {
    successRedirect: "/login",
    failureRedirect: "/"
  })
);

// this is handling the password reset
router.post("/passwordReset", (req, res, next) => {
  db.students
    .findOne({
      attributes: ["isAdmin", "password"],
      where: {
        id: req.body.id
      }
    })
    .then(function(results) {
      if (!results.isAdmin) {
        res.json("You do not have admin privileges!");
      } else if (
        !bcrypt.compareSync(req.body.adminPassword, results.password)
      ) {
        res.json("The admin password is incorrect");
      } else {
        db.students
          .update(
            {
              password: bcrypt.hashSync(req.body.password, saltRounds)
            },
            {
              where: {
                email: req.body.email
              }
            }
          )
          .then(function(results) {
            res.json(results);
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    })
    .catch(function(err) {
      console.log(err);
    });
});

module.exports = router;
