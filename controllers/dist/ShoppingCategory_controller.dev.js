"use strict";

var Shoppingcategory = require("../models/shoppingCategory");

module.exports = {
  all: function all(req, res, next) {
    var limit = parseInt(req.query.limit) || "";
    Shoppingcategory.find({}).limit(limit).then(function (cato) {
      return res.status(200).send(cato);
    })["catch"](next);
  },
  create: function create(req, res, next) {
    // next from middelware
    var catoProps = req.body;
    Shoppingcategory.create(catoProps).then(function (Shoppingcategory) {
      return res.status(201).send(Shoppingcategory);
    }) // 201 to user
    ["catch"](next); // if error send to next middle ware
  },
  // //
  edit: function edit(req, res, next) {
    var catoId = req.params.id;
    var catoProps = req.body; // get user and update

    Shoppingcategory.findByIdAndUpdate({
      _id: catoId
    }, catoProps) // if success get user after updated
    .then(function () {
      return Shoppingcategory.findById({
        _id: catoId
      });
    }) // //if you get user send it
    .then(function (shoppingcategory) {
      return res.status(200).send(shoppingcategory);
    }) // //else send to middle
    ["catch"](next);
  },
  // //
  "delete": function _delete(req, res, next) {
    var catoId = req.params.id;
    Shoppingcategory.findByIdAndRemove({
      _id: catoId
    }).then(function (cato) {
      return res.status(204).send(cato);
    })["catch"](next);
  },
  getbyid: function getbyid(req, res, next) {
    var id = req.params.id;
    Shoppingcategory.findById(id).then(function (cato) {
      return res.status(200).json(cato);
    })["catch"](next);
  }
};