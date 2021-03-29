"use strict";

var express = require("express");

var UserRoutes = require("./routes/User_route");

var hotelRoutes = require("./routes/hotel_route");

var shoppingRoutes = require("./routes/shopping_route");

var ResturantRoutes = require("./routes/restaurant_route");

var cruiseRoutes = require("./routes/cruise_route");

var hotelcategoryRoutes = require("./routes/hotelcategory_route");

var resturantCategoryRoutes = require("./routes/resturantCategory_route");

var citiesRoute = require("./routes/cities_route");

var ShoppingCategoryRoutes = require("./routes/ShoppingCategory_route");

var app = express();

var cors = require("cors"); // // 4 make mongo connected


var mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mohamed:mohamed5@tripadvisorcluster.g48e8.mongodb.net/TripAdvisor?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); // // //
// //
// // /*** here oreder of middleware is important***/
// // //3 first middleware

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors()); // // //
// // //

hotelRoutes(app);
ResturantRoutes(app);
shoppingRoutes(app);
cruiseRoutes(app);
hotelcategoryRoutes(app);
UserRoutes(app);
resturantCategoryRoutes(app);
ShoppingCategoryRoutes(app);
citiesRoute(app);
app.use(function (err, req, res, next) {
  // any error should return from response
  console.log(err.message);
  res.status(422).send({
    err: err.message
  });
}); // for index

module.exports = app;