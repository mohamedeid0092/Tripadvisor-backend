const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const hotelcategarySchema = new Schema({
    safety: {
        _id: {
            type: Schema.Types.ObjectId,
            auto: true
        },
        name: String
    },
    deals: [{
        _id: {
            type: Schema.Types.ObjectId,
            auto: true
        },
        name: String
    }],
    popular: [{
        _id: {
            type: Schema.Types.ObjectId,
            auto: true
        },
        name: String
    }],
    distance: [{
        _id: {
            type: Schema.Types.ObjectId,
            auto: true
        },
        name: String
    }],
    amenities: [{
        _id: {
            type: Schema.Types.ObjectId,
            auto: true
        },
        name: String
    }],
    hotelClass: [{
        _id: {
            type: Schema.Types.ObjectId,
            auto: true
        },
        name: String
    }],
    languageSpoken: [{
        _id: {
            type: Schema.Types.ObjectId,
            auto: true
        },
        name: String
    }]

})
const Hotelcategory = mongoose.model('hotelcategary', hotelcategarySchema, 'hotel category');

module.exports = Hotelcategory;