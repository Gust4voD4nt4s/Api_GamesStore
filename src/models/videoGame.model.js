const mongoose = require('mongoose')

const videoGameSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true
    },

    cpu: {
        type: String,
        required: true
    },

    gpu: {
        type: String,
        required: true
    },

    storageSize: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('VideoGame', videoGameSchema)