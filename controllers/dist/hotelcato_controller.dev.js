"use strict";

var Hotelcategory = require("../models/Category");

module.exports = {
  all: function all(req, res, next) {
    var limit = parseInt(req.query.limit) || '';
    Hotelcategory.find({}).limit(limit).then(function (cato) {
      return res.status(200).send(cato);
    })["catch"](next);
  },
  create: function create(req, res, next) {
    // next from middelware
    var catoProps = req.body;
    Hotelcategory.create(catoProps).then(function (hotelcategory) {
      return res.status(201).send(hotelcategory);
    }) // 201 to user
    ["catch"](next); // if error send to next middle ware
  },
  // //
  edit: function edit(req, res, next) {
    var catoId = req.params.id;
    var catoProps = req.body; // get user and update

    Hotelcategory.findByIdAndUpdate({
      _id: catoId
    }, catoProps) // if success get user after updated
    .then(function () {
      return Hotelcategory.findById({
        _id: catoId
      });
    }) // //if you get user send it
    .then(function (hotelcategory) {
      return res.status(200).send(hotelcategory);
    }) // //else send to middle
    ["catch"](next);
  },
  // //
  "delete": function _delete(req, res, next) {
    var catoId = req.params.id;
    Hotelcategory.findByIdAndRemove({
      _id: catoId
    }).then(function (cato) {
      return res.status(204).send(cato);
    })["catch"](next);
  },
  getbyid: function getbyid(req, res, next) {
    var id = req.params.id;
    Hotelcategory.findById(id).then(function (cato) {
      return res.status(200).json(cato);
    })["catch"](next);
    ;
  }
};