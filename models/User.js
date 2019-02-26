const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    facebookId: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    clips : [{
        type: Schema.Types.ObjectId,
        ref: 'clip'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;