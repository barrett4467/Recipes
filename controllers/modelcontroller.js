const db = require("../models");

module.exports = {
    create:  (req,res) => {
        db.Recipe
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))  
    },
    findAll: (req,res) => {
        db.Recipe   
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Recipe
            .findById(req.params.id)
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
}