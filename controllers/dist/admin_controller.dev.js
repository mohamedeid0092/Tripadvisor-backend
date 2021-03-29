"use strict";

var User = require("../models/adminuser");

var bcrypt = require('bcryptjs');

module.exports = {
  postLogin: function postLogin(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    User.findOne({
      email: email
    }).then(function (user) {
      if (!user) {
        return res.redirect('/login');
      }

      bcrypt.compare(password, user.password).then(function (doMatch) {
        if (doMatch) {
          req.session.isLoggedIn = true;
          req.session.user = user;
          return req.session.save(function (err) {
            console.log(err);
            res.redirect('/');
          });
        }

        res.redirect('/login');
      })["catch"](function (err) {
        console.log(err);
        res.redirect('/login');
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  },
  getLogin: function getLogin(req, res, next) {
    res.render('auth/login', {
      path: '/login',
      pageTitle: 'Login',
      isAuthenticated: false
    });
  }
};