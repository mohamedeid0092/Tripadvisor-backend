const Cities = require("../models/cities");

module.exports = {
    all(req, res, next) {
        const limit = parseInt(req.query.limit) || "";
        Cities.find({})
            .limit(limit)
            .then((cities) => res.status(200).send(cities))
            .catch(next);
    },
    create(req, res, next) {
        // next from middelware
        const citiesProps = req.body;
        Cities.create(citiesProps)
            .then((cities) => res.status(201).send(cities)) // 201 to user
            .catch(next); // if error send to next middle ware
    },
    // //
    edit(req, res, next) {
        const CitiesId = req.params.id;
        const CitiesProps = req.body;
        // get user and update
        Cities.findByIdAndUpdate({
                    _id: CitiesId,
                },
                CitiesProps
            )
            // if success get user after updated
            .then(() =>
                Cities.findById({
                    _id: CitiesId,
                })
            )
            // //if you get user send it
            .then((cities) => res.status(200).send(cities))
            // //else send to middle
            .catch(next);
    },
    // //
    delete(req, res, next) {
        const CitiesId = req.params.id;
        Cities.findByIdAndRemove({
                _id: CitiesId,
            })
            // in case is removed return 204 abject?
            .then((cities) => res.status(204).send(cities))
            .catch(next);
    },
    getbyid(req, res, next) {
        const {
            id
        } = req.params;
        Cities.findById(id).then(
            city => res.status(200).json(city)).catch(next);;

    }
};