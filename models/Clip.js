const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clipSchema = new Schema({
    videoId: {
        type: Number,
        required: true
    },
    userId: {
        type: Number,
        required: true
    },
    categories: [{
        type: String
    }],
    dateCreated: {
        type: Date,
        default: Date.now()
    }
});

const Clip = mongoose.model('Clip', clipSchema);

module.exports = Clip;