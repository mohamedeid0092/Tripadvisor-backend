const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    telephone: Number,
    Email: String,
    website: String,
  },
  cityname: String,
  address: {
    streetname: String,
    zipcode: Number,
    openhours: String,
    location: {
      latitude: { type: Schema.Types.Decimal128 },
      longtitude: { type: Schema.Types.Decimal128 },
    },
  },
  imageUrls: [String],
  types: [String],
  Recommendations: [String],
  reviews: {
    text: String,
    rating: Number,
    userID: Schema.Types.ObjectId,
  },
  descripation: {
    text: String,
    lang: String,
  },
});
const Shopping = mongoose.model("shopping", shopSchema, "shopping");

module.exports = Shopping;
