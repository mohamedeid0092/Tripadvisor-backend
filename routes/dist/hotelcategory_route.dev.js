"use strict";

var hotelcategoryController = require('../controllers/hotelcato_controller'); // post => create in database


module.exports = function (app) {
  app.get('/hotels/category', hotelcategoryController.all);
  app.get('/hotels/category/:id', hotelcategoryController.getbyid);
  app.post('/hotels/category', hotelcategoryController.create);
  app.put('/hotels/category/:id', hotelcategoryController.edit);
  app["delete"]('/hotels/category/:id', hotelcategoryController["delete"]);
};