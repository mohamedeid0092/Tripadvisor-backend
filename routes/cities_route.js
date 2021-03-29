const cityController = require("../controllers/city_controller");

module.exports = (app) => {
  app.get("/cities", cityController.all);

  app.post("/cities", cityController.create);

  app.get("/cities/:id", cityController.getbyid);

  app.put("/cities/:id", cityController.edit);

  app.delete("/cities/:id", cityController.delete);
};