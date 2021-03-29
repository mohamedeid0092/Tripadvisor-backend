"use strict";

var User = require("../models/User");

module.exports = {
  all: function all(req, res, next) {
    var limit = parseInt(req.query.limit) || '';
    User.find({}).limit(limit).then(function (user) {
      return res.status(200).send(user);
    })["catch"](next);
  },
  create: function create(req, res, next) {
    // next from middelware
    var userProps = req.body;
    User.create(userProps).then(function (user) {
      return res.status(201).send(user);
    }) // 201 to user
    ["catch"](next); // if error send to next middle ware
  },
  // //
  edit: function edit(req, res, next) {
    var userId = req.params.id;
    var userProps = req.body; // get user and update

    User.findByIdAndUpdate({
      _id: userId
    }, userProps) // if success get user after updated
    .then(function () {
      return User.findById({
        _id: userId
      });
    }) // //if you get user send it
    .then(function (user) {
      return res.status(200).send(user);
    }) // //else send to middle
    ["catch"](next);
  },
  // //
  "delete": function _delete(req, res, next) {
    var userId = req.params.id;
    User.findByIdAndRemove({
      _id: userId
    }).then(function (user) {
      return res.status(204).send(user);
    })["catch"](next);
  }
};