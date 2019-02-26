const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.User
            .find(req.user)
            .sort({_id: 1})
            .populate('clips')
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findAll: (req, res) => {
        db.User
            .find(req.user)
            .sort({_id: 1})
            .populate('clips')
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
};