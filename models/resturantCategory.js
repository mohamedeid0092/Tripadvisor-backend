const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ResturantCategorySchema = new Schema({
  Establishment: [
    {
      _id: Schema.Types.ObjectId,
      name: String,
    },
  ],
  features: [
    {
      _id: Schema.Types.ObjectId,
      name: String,
    },
  ],
  meals: [
    {
      _id: Schema.Types.ObjectId,
      name: String,
    },
  ],
  Pricerange: [
    {
      _id: Schema.Types.ObjectId,
      name: String,
    },
  ],
  cuisine: [
    {
      _id: Schema.Types.ObjectId,
      name: String,
    },
  ],
  dishes: [
    {
      _id: Schema.Types.ObjectId,
      name: String,
    },
  ],
  DietaryRestrictions: [
    {
      _id: Schema.Types.ObjectId,
      name: String,
    },
  ],
  goodFor: [
    {
      _id: Schema.Types.ObjectId,
      name: String,
    },
  ],
});

const RestaurantCategory = mongoose.model(
  "restaurantCategory",
  ResturantCategorySchema,
  "Resturant Category"
);
module.exports = RestaurantCategory;
