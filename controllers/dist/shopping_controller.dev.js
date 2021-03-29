"use strict";

var Shop = require("../models/shopping");

module.exports = {
  all: function all(req, res, next) {
    var limit = parseInt(req.query.limit) || '';
    Shop.find({}).limit(limit).then(function (shop) {
      return res.status(200).send(shop);
    })["catch"](next);
  },
  create: function create(req, res, next) {
    // next from middelware
    var shopProps = req.body;
    Shop.create(shopProps).then(function (shop) {
      return res.status(201).send(shop);
    }) // 201 to user
    ["catch"](next); // if error send to next middle ware
  },
  // //
  edit: function edit(req, res, next) {
    var shopId = req.params.id;
    var shopsProps = req.body; // get user and update

    Shop.findByIdAndUpdate({
      _id: shopId
    }, shopsProps) // if success get user after updated
    .then(function () {
      return Shop.findById({
        _id: shopsId
      });
    }) // //if you get user send it
    .then(function (shop) {
      return res.status(200).send(shop);
    }) // //else send to middle
    ["catch"](next);
  },
  // //
  "delete": function _delete(req, res, next) {
    var shopId = req.params.id;
    Shop.findByIdAndRemove({
      _id: shopId
    }) // in case is removed return 204 abject?
    .then(function (shop) {
      return res.status(204).send(shop);
    })["catch"](next);
  }
};