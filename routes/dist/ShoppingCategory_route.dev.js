"use strict";

var ShoppingCateoryController = require("../controllers/ResturantCategory_controller"); // post => create in database


module.exports = function (app) {
  app.get("/shopping/category", ShoppingCateoryController.all);
  app.get("/shopping/category/:id", ShoppingCateoryController.getbyid);
  app.post("/shopping/category", ShoppingCateoryController.create);
  app.put("/shopping/category/:id", ShoppingCateoryController.edit);
  app["delete"]("/shopping/category/:id", ShoppingCateoryController["delete"]);
};