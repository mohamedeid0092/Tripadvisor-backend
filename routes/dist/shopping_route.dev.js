"use strict";

var shoppingController = require('../controllers/shopping_controller'); // post => create in database


module.exports = function (app) {
  app.get('/shopping', shoppingController.all);
  app.post('/shopping', shoppingController.create);
  app.put('/shopping/:id', shoppingController.edit);
  app["delete"]('/shopping/:id', shoppingController["delete"]);
};