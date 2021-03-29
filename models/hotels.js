const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  booking: [
    {
      checkIn: {
        type: Date,
        required: true,
      },
      checkOut: {
        type: Date,
        required: true,
      },
      rooms: Number,
      children: Number,
      adults: Number,
      price: Number,
      userId: Schema.Types.ObjectId,
      email: String,
      phone: Number,
    },
  ],
  map: {
    latitude: {
      type: Schema.Types.Decimal128,
    },
    longitude: {
      type: Schema.Types.Decimal128,
    },
  },
  Pricedeals: [
    {
      name: String,
      link: String,
      pricePerNight: Number,
    },
  ],
  rooms: Number,
  images: [String],
  deals: [Schema.Types.ObjectId],
  amenities: [Schema.Types.ObjectId],
  class: Schema.Types.ObjectId,
  distance: {
    mainStreet: Number,
    beach: Number,
    park: Number,
    cityCenter: Number,
  },
  popular: [Schema.Types.ObjectId],
  languageSpoken: [Schema.Types.ObjectId],
  style: [String],
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
  descripation: {
    text: String,
    lang: String,
  },
  likes: [Schema.Types.ObjectId],
});

const Hotels = mongoose.model("hotels", HotelSchema, "hotels1");

module.exports = Hotels;
