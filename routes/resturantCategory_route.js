const resturantCateoryController = require("../controllers/ResturantCategory_controller");
// post => create in database
module.exports = (app) => {
  app.get("/resturantscategory", resturantCateoryController.all);
  app.get("/resturantscategory/:id", resturantCateoryController.getbyid);

  app.post("/resturantscategory", resturantCateoryController.create);

  app.put("/resturantscategory/:id", resturantCateoryController.edit);

  app.delete("/resturantscategory/:id", resturantCateoryController.delete);
};
