const db = require("../models");

module.exports = {
    create:  (req,res) => {
        db.Recipe
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))  
    },
    find: (req,res) => {
        db.Recipe   
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}