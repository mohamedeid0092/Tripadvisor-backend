const hotelController = require("../controllers/hotel_controller");
// post => create in database
module.exports = (app) => {
    app.get("/hotels", hotelController.all);
    // app.get('/hotels/:id',
    //     hotelController.getbyid);

    app.get("/hotels/:id", hotelController.getbyid);

    app.post("/hotels", hotelController.create);
    app.put("/hotels/booking/:id", hotelController.editbooking);

    app.put("/hotels/:id", hotelController.edit);

    app.delete("/hotels/:id", hotelController.delete);
};