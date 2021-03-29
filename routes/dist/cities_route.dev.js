"use strict";

var cityController = require("../controllers/city_controller");

module.exports = function (app) {
  app.get("/cities", cityController.all);
  app.post("/cities", cityController.create);
  app.get("/cities/:id", cityController.getbyid);
  app.put("/cities/:id", cityController.edit);
  app["delete"]("/cities/:id", cityController["delete"]);
};