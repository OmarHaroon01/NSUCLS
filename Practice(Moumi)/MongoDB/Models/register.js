const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    confirmPassword: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('register', RegisterSchema);