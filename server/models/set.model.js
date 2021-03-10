const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: false
    },
    reps: {
        type: Number,
        required: true
    },
    routine: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'routine'
    }
}, {
    timestamps: true
});

const Set = mongoose.model('set', setSchema);

module.exports = Set;