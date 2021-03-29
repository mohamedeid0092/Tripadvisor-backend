const Resturantcategory = require("../models/resturantCategory");

module.exports = {
  all(req, res, next) {
    const limit = parseInt(req.query.limit) || "";
    Resturantcategory.find({})
      .limit(limit)
      .then((cato) => res.status(200).send(cato))
      .catch(next);
  },
  create(req, res, next) {
    // next from middelware
    const catoProps = req.body;
    Resturantcategory.create(catoProps)
      .then((resturantcategory) => res.status(201).send(resturantcategory)) // 201 to user
      .catch(next); // if error send to next middle ware
  },
  // //
  edit(req, res, next) {
    const catoId = req.params.id;
    const catoProps = req.body;
    // get user and update
    Resturantcategory.findByIdAndUpdate(
      {
        _id: catoId,
      },
      catoProps
    )
      // if success get user after updated
      .then(() =>
        Resturantcategory.findById({
          _id: catoId,
        })
      )
      // //if you get user send it
      .then((resturantcategory) => res.status(200).send(resturantcategory))
      // //else send to middle
      .catch(next);
  },
  // //
  delete(req, res, next) {
    const catoId = req.params.id;
    Resturantcategory.findByIdAndRemove({
      _id: catoId,
    })

      .then((cato) => res.status(204).send(cato))
      .catch(next);
  },
  getbyid(req, res, next) {
    const { id } = req.params;
    Resturantcategory.findById(id)
      .then((cato) => res.status(200).json(cato))
      .catch(next);
  },
};
