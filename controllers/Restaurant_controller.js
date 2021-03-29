const Restaurant = require("../models/Restaurant");

module.exports = {
  all(req, res, next) {
    const limit = parseInt(req.query.limit) || "";
    Restaurant.find({})
      .limit(limit)
      .then((shop) => res.status(200).send(shop))
      .catch(next);
  },
  create(req, res, next) {
    // next from middelware
    const restProps = req.body;
    Restaurant.create(restProps)
      .then((rest) => res.status(201).send(rest)) // 201 to user
      .catch(next); // if error send to next middle ware
  },
  // //
  edit(req, res, next) {
    const restId = req.params.id;
    const restProps = req.body;
    // get user and update
    Restaurant.findByIdAndUpdate({ _id: restId }, restProps)
      // if success get user after updated
      .then(() => Restaurant.findById({ _id: restId }))
      // //if you get user send it
      .then((rest) => res.status(200).send(rest))
      // //else send to middle
      .catch(next);
  },
  // //
  delete(req, res, next) {
    const restId = req.params.id;
    Restaurant.findByIdAndRemove({ _id: restId })
      // in case is removed return 204 abject?
      .then((rest) => res.status(204).send(rest))
      .catch(next);
  },
  getbyid(req, res, next) {
    const { id } = req.params;
    Restaurant.findById(id)
      .then((rest) => res.status(200).json(rest))
      .catch(next);
  },
};