const router = require('express').Router();

const Routine = require('../models/routine.model');
const User = require('../models/user.model');
const Set = require('../models/set.model');

createRoutine = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(401).json({ success: false, error: 'You must provide the required information!' });
    }

    const name = req.body.name;
    
    const user = await User.findById(req.user.id)
        .catch(err => {
            return res.status(404).json({ success: false, error: 'This user does not exist!' });
        });
    
    const routine = await Routine.create({ name, user })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
    
    user.routines.push(routine);
    user.save()
        .then(() => {
            return res.status(200).json({ success: true, routine });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

displayRoutines = async (req, res) => {
    await Routine.find({ user: req.user.id }).sort({ createdAt: 'desc' })
        .then(routines => {
            return res.status(200).json({ success: true, routines });
        })
        .catch(err => {
            return res.status(400).json({ success: false, error: 'There are no routines to display!' });
        });
}

displayRoutine = async (req, res) => {
    await Routine.findById(req.params.id).populate({ path: 'sets' })
        .then(routine => {
            return res.status(200).json({ success: true, routine });
        })
        .catch(err => {
            return res.status(400).json({ success: false, error: 'This routine does not exist!' });
        });
}

updateRoutine = async (req, res) => {
    const update = {
        name: req.body.name
    }

    await Routine.findOneAndUpdate({ _id: req.params.id }, update, { runValidators: true })
        .then(routine => {
            return res.status(200).json({ success: true, routine });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

deleteRoutine = async (req, res) => {
    const routine = await Routine.findById(req.params.id)
        .catch(err => {
            return res.status(404).json({ success: false, error: 'This routine does not exist!' });
        });

    await Set.deleteMany({ routine: req.params.id })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });

    await User.findOneAndUpdate({ _id: req.user.id }, { $pull: { routines: req.params.id } }, { runValidators: true })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });

    await Routine.findOneAndDelete({ _id: req.params.id })
        .then(() => {
            return res.status(200).json({ success: true, message: 'This routine has been successfully deleted!' });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

module.exports = {
    createRoutine,
    displayRoutines,
    displayRoutine,
    updateRoutine,
    deleteRoutine
}