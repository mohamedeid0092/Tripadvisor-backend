const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const cruiseSchema = new Schema({
  
    booking: [{
        checkIn: {
            type: Date,
            required: true
        },
        checkOut: {
            type: Date,
            required: true
        },
  
  userId: Schema.Types.ObjectId,
  rooms: Number,
  children: Number,
  adults: Number,
  price: Number,
  email: String,
        phone: Number
    }],
    
    shipName:String,
    price:Number,
    discount: Number,
    sailingDate: Date,
    departureMonth: String,
    activities: [String],
    entertainment: [String],
    dining: [String],
    images: [String],
    days: Number,
    whereTo: String,
    travelers: [{
        passengers : Number,
        crew: Number,
    }],
    shipInfo: [{
          company_line : String,
    criuse_ship : String,
    launched : String,
    }],
    departsFrom: String,
    reviews: [{ review: String,
      user: Schema.Types.ObjectId,}],
    rating:[{
          user: String,
         rate: Number,
    }]
  
});
const Cruise = mongoose.model("crusie", cruiseSchema, "Cruise");

module.exports = Cruise;
