const mongoose = require('mongoose')

userSchemas = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profiles: {
        type: [String],
        required: true
    }
})

module.exports = mongoose.model('User', userSchemas)