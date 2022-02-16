const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    confirmPassword: String,
});

module.exports = mongoose.model('register', RegisterSchema);