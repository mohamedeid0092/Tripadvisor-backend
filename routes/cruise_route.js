const cruiseController = require("../controllers/cruise_controller");
// post => create in database
module.exports = (app) => {
  app.get("/cruise", cruiseController.all);

  app.get("/cruise/:id", cruiseController.getbyid);

  app.post("/cruise", cruiseController.create);

  app.put("/cruise/:id", cruiseController.edit);

  app.delete("/cruise/:id", cruiseController.delete);
};
