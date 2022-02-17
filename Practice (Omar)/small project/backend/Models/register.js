const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    isVerified: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('register', RegisterSchema);