const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log(req.body);
        db.Recipe
        .find(req.query)
        .then(dbModel => {res.json(dbModel), console.log(dbModel)})
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Recipe
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Recipe
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Recipe
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Recipe
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    };
      