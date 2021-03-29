const Shop = require("../models/shopping");

module.exports = {
 
  all(req, res, next){
    const limit = parseInt(req.query.limit) || ''
    Shop.find({}).limit(limit)
    .then(shop => res.status(200).send(shop))
    .catch(next)
  },
  create(req, res, next){
    // next from middelware
    const shopProps = req.body;
    Shop.create(shopProps)
      .then(shop =>
        res.status(201).send(shop)) // 201 to user
      .catch(next) // if error send to next middle ware


  },
// //
  edit(req, res, next){
    const shopId = req.params.id;
    const shopsProps = req.body;
    // get user and update
    Shop.findByIdAndUpdate({_id: shopId}, shopsProps)
    // if success get user after updated
    .then(() => Shop.findById({_id: shopsId}))
    // //if you get user send it
    .then(shop => res.status(200).send(shop))
    // //else send to middle
    .catch(next);
  },
// //
  delete(req, res, next){
    const shopId = req.params.id;
    Shop.findByIdAndRemove({_id: shopId})
    // in case is removed return 204 abject?
      .then(shop => res.status(204).send(shop))
      .catch(next);
  }
};