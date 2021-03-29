const Shoppingcategory = require("../models/shoppingCategory");

module.exports = {
    all(req, res, next) {
        const limit = parseInt(req.query.limit) || "";
        Shoppingcategory.find({})
            .limit(limit)
            .then((cato) => res.status(200).send(cato))
            .catch(next);
    },
    create(req, res, next) {
        // next from middelware
        const catoProps = req.body;
        Shoppingcategory.create(catoProps)
            .then((Shoppingcategory) => res.status(201).send(Shoppingcategory)) // 201 to user
            .catch(next); // if error send to next middle ware
    },
    // //
    edit(req, res, next) {
        const catoId = req.params.id;
        const catoProps = req.body;
        // get user and update
        Shoppingcategory.findByIdAndUpdate({
                    _id: catoId,
                },
                catoProps
            )
            // if success get user after updated
            .then(() =>
                Shoppingcategory.findById({
                    _id: catoId,
                })
            )
            // //if you get user send it
            .then((shoppingcategory) => res.status(200).send(shoppingcategory))
            // //else send to middle
            .catch(next);
    },
    // //
    delete(req, res, next) {
        const catoId = req.params.id;
        Shoppingcategory.findByIdAndRemove({
            _id: catoId,
        })

        .then((cato) => res.status(204).send(cato))
            .catch(next);
    },
    getbyid(req, res, next) {
        const {
            id
        } = req.params;
        Shoppingcategory.findById(id)
            .then((cato) => res.status(200).json(cato))
            .catch(next);
    },
};