const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    sets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'set'
    }]
}, {
    timestamps: true
});

const Routine = mongoose.model('routine', routineSchema);

module.exports = Routine;