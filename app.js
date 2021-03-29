const express = require("express");
const UserRoutes = require("./routes/User_route");
const hotelRoutes = require("./routes/hotel_route");
const shoppingRoutes = require("./routes/shopping_route");
const ResturantRoutes = require("./routes/restaurant_route");
const cruiseRoutes = require("./routes/cruise_route");
const hotelcategoryRoutes = require("./routes/hotelcategory_route");
const resturantCategoryRoutes = require("./routes/resturantCategory_route");
const citiesRoute = require("./routes/cities_route");
const ShoppingCategoryRoutes = require("./routes/ShoppingCategory_route");
const userRoutes = require("./routes/user.route");
const app = express();
var cors = require("cors");
// // 4 make mongo connected
const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://mohamed:mohamed5@tripadvisorcluster.g48e8.mongodb.net/TripAdvisor?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
// // //
// //
// // /*** here oreder of middleware is important***/
// // //3 first middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
// // //
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
app.use("/api/user", userRoutes);

app.use((err, req, res, next) => {
    // any error should return from response
    console.log(err.message);
    res.status(422).send({
        err: err.message,
    });
});
// for index
module.exports = app;