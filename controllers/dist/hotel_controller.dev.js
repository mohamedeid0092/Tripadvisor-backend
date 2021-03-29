"use strict";

var Hotels = require("../models/hotels");

module.exports = {
  all: function all(req, res, next) {
    var limit = parseInt(req.query.limit) || "";
    Hotels.find({}).limit(limit).then(function (hotels) {
      return res.status(200).send(hotels);
    })["catch"](next);
  },
  create: function create(req, res, next) {
    // next from middelware
    var hotelProps = req.body;
    Hotels.create(hotelProps).then(function (hotels) {
      return res.status(201).send(hotels);
    }) // 201 to user
    ["catch"](next); // if error send to next middle ware
  },
  // //
  edit: function edit(req, res, next) {
    var hotelsId = req.params.id;
    var hotelsProps = req.body; // get user and update

    Hotels.findByIdAndUpdate({
      _id: hotelsId
    }, hotelsProps) // if success get user after updated
    .then(function () {
      return Hotels.findById({
        _id: hotelsId
      });
    }) // //if you get user send it
    .then(function (hotels) {
      return res.status(200).send(hotels);
    }) // //else send to middle
    ["catch"](next);
  },
  editbooking: function editbooking(req, res, next) {
    var hotelsId = req.params.id;
    var book = {
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      rooms: req.body.rooms,
      phone: req.body.Phone,
      email: req.body.email,
      children: req.body.children,
      adults: req.body.adults
    }; // get user and update

    Hotels.findByIdAndUpdate({
      _id: hotelsId
    }, {
      $push: {
        booking: book
      }
    }) // if success get user after updated
    .then(function () {
      return Hotels.findById({
        _id: hotelsId
      });
    }) // //if you get user send it
    .then(function (hotels) {
      return res.status(200).send(hotels);
    }) // //else send to middle
    ["catch"](next);
  },
  // //
  "delete": function _delete(req, res, next) {
    var hotelsId = req.params.id;
    Hotels.findByIdAndRemove({
      _id: hotelsId
    }) // in case is removed return 204 abject?
    .then(function (hotels) {
      return res.status(204).send(hotels);
    })["catch"](next);
  },
  getbyid: function getbyid(req, res, next) {
    var id = req.params.id;
    Hotels.findById(id).then(function (hotels) {
      return res.status(200).json(hotels);
    })["catch"](next);
  }
};