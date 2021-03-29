"use strict";

var Cities = require("../models/cities");

module.exports = {
  all: function all(req, res, next) {
    var limit = parseInt(req.query.limit) || "";
    Cities.find({}).limit(limit).then(function (cities) {
      return res.status(200).send(cities);
    })["catch"](next);
  },
  create: function create(req, res, next) {
    // next from middelware
    var citiesProps = req.body;
    Cities.create(citiesProps).then(function (cities) {
      return res.status(201).send(cities);
    }) // 201 to user
    ["catch"](next); // if error send to next middle ware
  },
  // //
  edit: function edit(req, res, next) {
    var CitiesId = req.params.id;
    var CitiesProps = req.body; // get user and update

    Cities.findByIdAndUpdate({
      _id: CitiesId
    }, CitiesProps) // if success get user after updated
    .then(function () {
      return Cities.findById({
        _id: CitiesId
      });
    }) // //if you get user send it
    .then(function (cities) {
      return res.status(200).send(cities);
    }) // //else send to middle
    ["catch"](next);
  },
  // //
  "delete": function _delete(req, res, next) {
    var CitiesId = req.params.id;
    Cities.findByIdAndRemove({
      _id: CitiesId
    }) // in case is removed return 204 abject?
    .then(function (cities) {
      return res.status(204).send(cities);
    })["catch"](next);
  },
  getbyid: function getbyid(req, res, next) {
    var id = req.params.id;
    Cities.findById(id).then(function (city) {
      return res.status(200).json(city);
    })["catch"](next);
    ;
  }
};