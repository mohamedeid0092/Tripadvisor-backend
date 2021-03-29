"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Restaurantschema = new Schema({
  name: {
    type: String,
    required: true
  },
  contact: {
    telephone: Number,
    Email: String,
    website: String,
    openhours: String
  },
  address: {
    streetname: String,
    zipcode: Number,
    location: {
      latitude: {
        type: Schema.Types.Decimal128
      },
      longtitude: {
        type: Schema.Types.Decimal128
      }
    }
  },
  imageUrls: [String],
  descripation: {
    text: String,
    lang: [String]
  },
  cuisine: [String],
  menu: String,
  features: [String],
  Recommendation: [String],
  Pricerange: String,
  Establishment: [String],
  meals: [String],
  DietaryRestrictions: [String],
  SPECIALDIETS: [String],
  reviews: {
    text: String,
    rating: Number,
    userID: Schema.Types.ObjectId
  }
});
var Restaurant = mongoose.model('restaurant', Restaurantschema, 'restaurants');
module.exports = Restaurant;