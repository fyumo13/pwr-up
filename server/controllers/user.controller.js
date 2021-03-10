const router = require('express').Router();

const User = require('../models/user.model');
const Routine = require('../models/routine.model');
const Set = require('../models/set.model');

register = async (req, res) => {
    const body = req.body;
    
    if (!body) {
        return res.status(401).json({
            success: false,
            error: 'You must provide the required information!'
        });
    }
    
    const user = new User(body);
    const token = user.getJwtToken();
    user.save()
        .then(() => {
            return res.status(200).json({ success: true, token });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

login = async (req, res) => {
    await User.findOne({ email: req.body.email })
        .then(async (user) => {
            const match = await user.comparePassword(req.body.password);

            if (!match) {
                return res.status(400).json({
                    success: false,
                    error: 'Invalid password!'
                });
            }

            const token = user.getJwtToken();
            return res.status(200).json({ success: true, token });
        })
        .catch(err => {
            return res.status(400).json({
                success: false,
                error: 'This email is not registered to an account!'
            });
        });
}

displayUsers = async (req, res) => {
    await User.find({})
        .then(users => {
            return res.status(200).json({ success: true, users });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

displayUser = async (req, res) => {
    await User.findOne({ _id: req.user.id }).populate({ path: 'routines' })
        .then(user => {
            return res.status(200).json({ success: true, user });
        })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });
}

updateUser = async (req, res) => {
    const update = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    };

    await User.findOneAndUpdate({ _id: req.user.id }, update, { runValidators: true })
        .then(user => {
            return res.status(200).json({ success: true, message: 'Successfully updated your account!' });
        })
        .catch(err => {
            return res.status(400).json({ success: false, error: 'Could not update information!' });
        });
}

deleteUser = async (req, res) => {
    const routine = await Routine.find({ user: req.user.id })
        .catch(err => {
            return res.status(404).json({ success: false, error: 'There are no routines to display!' });
        });

    await Set.deleteMany({ routine: routine })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });

    await Routine.deleteMany({ user: req.user.id })
        .catch(err => {
            return res.status(400).json({ success: false, err });
        });

    await User.findOneAndDelete({ _id: req.user.id })
        .then(() => {
            return res.status(200).json({ success: true, message: 'This user has been successfully deleted!' });
        })
        .catch(err => {
            return res.status(400).json({ success: false, error: 'Could not delete user!'});
        });
}

module.exports = {
    register,
    login,
    displayUsers,
    displayUser,
    updateUser,
    deleteUser
}