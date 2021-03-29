"use strict";

var adminController = require('../controllers/admin_controller');

module.exports = function (app) {
  app.post('/login', adminController.postLogin);
  app.get('/login', adminController.getLogin);
};