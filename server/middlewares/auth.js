const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return res.status(403).json({ message: 'You must log in to visit this page!' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return next({ message: `No user found for ID ${decoded.id}` });
        }

        req.user = user;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'You must log in to visit this page!' });
    }
};