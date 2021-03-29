"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    "default": 123456
  },
  Home_Airport: String,
  contact_info: {
    Email: String,
    website: String,
    currentcity: String,
    streetaddress: String,
    country: String,
    state: String,
    Aboutyou: String,
    phonenumber: Number,
    zipcode: Number
  },
  Profileimage: String,
  Coverimage: String,
  Joining_date: Date,
  reviews: [{
    placevisited: {
      establishment: String,
      placename: String
    },
    title: String,
    text: String,
    rating: Number,
    traveldate: Date
  }],
  postimages: [String]
});
var User = mongoose.model('User', UserSchema, 'Users');
module.exports = User;