const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const SALT_WORK_FACTOR = 12;

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-z]*$/,
        unique: true
    },
    password: {
        type: String,
        required: true,
        match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\!\@\#\$\%\^\&\*])(?=.{8,})/,
        minlength: 8
    },
    routines: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'routine'
    }]
}, {
    timestamps: true
});

userSchema.pre('save', function(next) {
    const user = this;

    // only hash the password if it has been modified or is new
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash password and new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override plain text password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.pre('findOneAndUpdate', async function() {
    if (this._update.password) {
        this._update.password = await bcrypt.hash(this._update.password, 10)
    }
});

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET);
};  

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model('user', userSchema);

module.exports = User;