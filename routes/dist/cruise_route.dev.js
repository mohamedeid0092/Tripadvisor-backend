"use strict";

var cruiseController = require('../controllers/cruise_controller'); // post => create in database


module.exports = function (app) {
  app.get('/cruise', cruiseController.all);
  app.post('/cruise', cruiseController.create);
  app.put('/cruise/:id', cruiseController.edit);
  app["delete"]('/cruise/:id', cruiseController["delete"]);
};