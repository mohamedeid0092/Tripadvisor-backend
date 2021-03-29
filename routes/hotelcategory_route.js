const hotelcategoryController = require('../controllers/hotelcato_controller');
// post => create in database
module.exports = (app) => {
  app.get("/hotelscategory", hotelcategoryController.all);
  // app.get('/hotels/category/:id',
  //     hotelcategoryController.getbyid);

  app.post("/hotelscategory", hotelcategoryController.create);

  app.put("/hotelscategory/:id", hotelcategoryController.edit);

  app.delete("/hotelscategory/:id", hotelcategoryController.delete);
};