const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
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

    active: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('user', userDataSchema);