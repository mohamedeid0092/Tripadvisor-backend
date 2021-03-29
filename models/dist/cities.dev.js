"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var CitiesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  hotelsId: [Schema.Types.ObjectId],
  resturantsId: [Schema.Types.ObjectId],
  cruisesId: [Schema.Types.ObjectId]
});
var Cities = mongoose.model("CitiesInEgypt", CitiesSchema, "CitiesInEgypt");
module.exports = Cities;