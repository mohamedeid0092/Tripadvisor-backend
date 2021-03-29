"use strict";

var RestController = require('../controllers/Restaurant_controller'); // post => create in database


module.exports = function (app) {
  app.get('/Restaurant', RestController.all);
  app.post('Restaurant', RestController.create);
  app.put('/Restaurant/:id', RestController.edit);
  app["delete"]('/Restaurant/:id', RestController["delete"]);
};