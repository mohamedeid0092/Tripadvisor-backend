const mongoose = require("mongoose");
const { schema } = require("./hotels");

const Schema = mongoose.Schema;
const Restaurantschema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrls: [String],
  address: {
    streetname: String,
    zipcode: Number,
    location: {
      latitude: { type: Schema.Types.Decimal128 },
      longitude: { type: Schema.Types.Decimal128 },
    },
  },
  contact: {
    telephone: Number,
    Email: String,
    website: String,
    openhours: Number,
  },
  descripation: {
    text: String,
    lang: [String],
  },
  Establishment: [String],
  features: [String],
  meals: [String],
  Pricerange: String,
  cuisine: [String],
  dishes: [String],
  DietaryRestrictions: [String],
  goodFor: [String],
  menu: [String],
  reviews: [
    {
      review: String,
      user: Schema.Types.ObjectId,
    },
  ],
  rating: [
    {
      rate: Number,
      user: Schema.Types.ObjectId,
    },
  ],
  likes: [Schema.Types.ObjectId],
});
const Restaurant = mongoose.model("Resturant", Restaurantschema, "Resturant");

module.exports = Restaurant;
