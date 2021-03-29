"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ShoppingCategorySchema = new Schema({
  Types: [{
    _id: Schema.Types.ObjectId,
    name: String
  }],
  Recommendation: [{
    _id: Schema.Types.ObjectId,
    name: String
  }]
});
var ShoppingCategory = mongoose.model("ShoppingCategory", ShoppingCategorySchema, "Shopping Category");
module.exports = ShoppingCategory;