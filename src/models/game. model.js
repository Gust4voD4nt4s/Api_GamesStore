const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({

    gameId: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: false
    },

    value: {
        type: Number,
        required: true
    },

    promotion: {
        type: Number,
        required: false
    }


})

module.exports = mongoose.model('Game', gameSchema)