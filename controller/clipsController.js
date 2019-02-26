const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Clip
            .find(req.clip)
            .sort({_id: 1})
            .populate('clips')
            .then(dbClip => res.json(dbClip))
            .catch(err => res.status(422).json(err));
    },
    findAll: (req, res) => {
        db.Clip
            .find(req.clip)
            .sort({_id: 1})
            .populate('clips')
            .then(dbClip => res.json(dbClip))
            .catch(err => res.status(422).json(err));
    }
};