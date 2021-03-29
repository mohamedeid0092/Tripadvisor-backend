const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ShoppingCategorySchema = new Schema({
    Types: [{
        _id: Schema.Types.ObjectId,
        name: String,
    }, ],
    Recommendation: [{
        _id: Schema.Types.ObjectId,
        name: String,
    }, ],

});

const ShoppingCategory = mongoose.model(
    "ShoppingCategory",
    ShoppingCategorySchema,
    "Shopping Category"
);
module.exports = ShoppingCategory;