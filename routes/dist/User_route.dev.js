"use strict";

var UserController = require('../controllers/User_controller'); // post => create in database


module.exports = function (app) {
  app.get('/User', UserController.all);
  app.post('/User', UserController.create);
  app.put('/User/:id', UserController.edit);
  app["delete"]('/User/:id', UserController["delete"]);
};