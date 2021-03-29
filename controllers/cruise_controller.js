const Cruise = require("../models/cruise");

module.exports = {
  all(req, res, next) {
    const limit = parseInt(req.query.limit) || "";
    Cruise.find({})
      .limit(limit)
      .then((cruise) => res.status(200).send(cruise))
      .catch(next);
  },
  create(req, res, next) {
    // next from middelware
    const cruiseProps = req.body;
    Cruise.create(cruiseProps)
      .then((cruise) => res.status(201).send(cruise)) // 201 to user
      .catch(next); // if error send to next middle ware
  },
  // //
  edit(req, res, next) {
    const cruiseId = req.params.id;
    const cruiseProps = req.body;
    // get user and update
    Cruise.findByIdAndUpdate({ _id: cruiseId }, cruiseProps)
      // if success get user after updated
      .then(() => Cruise.findById({ _id: cruiseId }))
      // //if you get user send it
      .then((cruise) => res.status(200).send(cruise))
      // //else send to middle
      .catch(next);
  },
  // //
  delete(req, res, next) {
    const cruiseId = req.params.id;
    Cruise.findByIdAndRemove({ _id: cruiseId })

      .then((cruise) => res.status(204).send(cruise))
      .catch(next);
  },

  getbyid(req, res, next) {
    const { id } = req.params;
    Cruise.findById(id)
      .then((cruise) => res.status(200).json(cruise))
      .catch(next);
  },
};