const mongoose = require('mongoose');
const uniqueValidator= require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    FirstName:String,

    LastName:String,
    
    Username:String,
        
    Email:{
        type: String,
        required: true,
        unique:true
   },
    Password:String,
    
    Joining_date:Date,
    
   Home_Airport: String,
    contact_info: {
        Email: String,
        website: String,
        currentcity: String,
        streetaddress: String,
        country: String,
        state: String,
        Aboutyou: String,
        phonenumber: Number,
        zipcode: Number,
    },
    Profileimage: String,
    Coverimage: String,
  
    reviews: [{
        placevisited: {
            establishment: String,
            placename: String,
        },
        title: String,
        text: String,
        rating: Number,
        traveldate: Date
    }],
    postimages: [String],

});

UserSchema.plugin(uniqueValidator);
const User = mongoose.model('User', UserSchema, 'Users');

module.exports = User;