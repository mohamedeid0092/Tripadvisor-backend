"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var cruiseSchema = new Schema({
  shipname: {
    type: String,
    required: true
  },
  Itineraries: [{
    cruisename: String,
    sailing_date: Date,
    Route: String,
    days: Number,
    daysRoute: [String],
    deals: [{
      name: String,
      link: String,
      Price: Number
    }],
    departs_from: String
  }],
  travelers: {
    passengers: Number,
    crew: Number
  },
  shipinfo: {
    company_line: String,
    cruise_ship: String,
    launched: String
  },
  Activities_and_entertainment: {
    Activities: [String],
    Entertainment: [String],
    Dining: [String]
  },
  cabins: {
    Suite: {
      Accessiblerooms: Number,
      Numberofcabins: Number,
      Maximumpassengers: Number,
      images: [String]
    },
    Balcony: {
      Accessiblerooms: Number,
      Numberofcabins: Number,
      Maximumpassengers: Number,
      images: [String]
    },
    Outside: {
      Accessiblerooms: Number,
      Numberofcabins: Number,
      Maximumpassengers: Number,
      images: [String]
    },
    Inside: {
      Accessiblerooms: Number,
      Numberofcabins: Number,
      Maximumpassengers: Number,
      images: [String]
    }
  },
  reviews: {
    text: String,
    rating: Number,
    userID: Schema.Types.ObjectId
  }
});
var Cruise = mongoose.model('crusie', cruiseSchema, 'cruise');
module.exports = Cruise;