"use strict";

var Restaurant = require("../models/Restaurant");

module.exports = {
  all: function all(req, res, next) {
    var limit = parseInt(req.query.limit) || '';
    Restaurant.find({}).limit(limit).then(function (shop) {
      return res.status(200).send(shop);
    })["catch"](next);
  },
  create: function create(req, res, next) {
    // next from middelware
    var restProps = req.body;
    Restaurant.create(restProps).then(function (rest) {
      return res.status(201).send(rest);
    }) // 201 to user
    ["catch"](next); // if error send to next middle ware
  },
  // //
  edit: function edit(req, res, next) {
    var restId = req.params.id;
    var restProps = req.body; // get user and update

    Restaurant.findByIdAndUpdate({
      _id: restId
    }, restProps) // if success get user after updated
    .then(function () {
      return Restaurant.findById({
        _id: restId
      });
    }) // //if you get user send it
    .then(function (rest) {
      return res.status(200).send(rest);
    }) // //else send to middle
    ["catch"](next);
  },
  // //
  "delete": function _delete(req, res, next) {
    var restId = req.params.id;
    Restaurant.findByIdAndRemove({
      _id: restId
    }) // in case is removed return 204 abject?
    .then(function (rest) {
      return res.status(204).send(rest);
    })["catch"](next);
  }
};