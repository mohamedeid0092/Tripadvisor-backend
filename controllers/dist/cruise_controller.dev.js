"use strict";

var Cruise = require("../models/cruise");

module.exports = {
  all: function all(req, res, next) {
    var limit = parseInt(req.query.limit) || '';
    Cruise.find({}).limit(limit).then(function (cruise) {
      return res.status(200).send(cruise);
    })["catch"](next);
  },
  create: function create(req, res, next) {
    // next from middelware
    var cruiseProps = req.body;
    Cruise.create(cruiseProps).then(function (cruise) {
      return res.status(201).send(cruise);
    }) // 201 to user
    ["catch"](next); // if error send to next middle ware
  },
  // //
  edit: function edit(req, res, next) {
    var cruiseId = req.params.id;
    var cruiseProps = req.body; // get user and update

    Cruise.findByIdAndUpdate({
      _id: cruiseId
    }, cruiseProps) // if success get user after updated
    .then(function () {
      return Cruise.findById({
        _id: cruiseId
      });
    }) // //if you get user send it
    .then(function (cruise) {
      return res.status(200).send(cruise);
    }) // //else send to middle
    ["catch"](next);
  },
  // //
  "delete": function _delete(req, res, next) {
    var cruiseId = req.params.id;
    Cruise.findByIdAndRemove({
      _id: cruiseId
    }).then(function (cruise) {
      return res.status(204).send(cruise);
    })["catch"](next);
  }
};