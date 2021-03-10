const router = require('express').Router();

const Set = require('../models/set.model');
const Routine = require('../models/routine.model');
const User = require('../models/user.model');
const { Router } = require('express');

createSet = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(401).json({ success: false, error: 'You must provide the required information!' });
    }

    const name = req.body.name;
    const weight = req.body.weight;
    const reps = req.body.reps;
    const routine = await Routine.findById(req.params.id) 
        .catch(err => {
            return res.status(404).json({ success: false, error: 'This routine does not exist!' });
        });
    
    const set = await Set.create({ name, weight, reps, routine })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
    
    routine.sets.push(set);
    routine.save()
        .then(() => {
            return res.status(200).json({ success: true, set });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

displaySet = async (req, res) => {
    await Set.findById(req.params.id)
        .then(set => {
            return res.status(200).json({ success: true, set });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

updateSet = async (req, res) => {
    const update =  {
        name: req.body.name,
        weight: req.body.weight,
        reps: req.body.reps
    }

    await Set.findOneAndUpdate({ _id: req.params.id }, update, { runValidators: true })
        .then(set => {
            return res.status(200).json({ success: true, set });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

deleteSet = async (req, res) => {
    const set = await Set.findById(req.params.id)
        .catch(err => {
            return res.status(404).json({ success: false, error: 'This set does not exist!' });
        });

    await Routine.findOneAndUpdate({ _id: set.routine }, { $pull: { sets: req.params.id } }, { runValidators: true })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });

    await Set.findOneAndDelete({ _id: req.params.id })
        .then(() => {
            return res.status(200).json({ success: true, message: 'This set has been successfully deleted!' });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

module.exports = {
    createSet,
    displaySet,
    updateSet,
    deleteSet
}