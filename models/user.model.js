
//init code
const mongoose = require('mongoose');

//user Schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String
    },

    roles: {
        type: String,
        default: 'subscriber'

    }
})

//module export
module.exports = mongoose.model('users', userSchema)
