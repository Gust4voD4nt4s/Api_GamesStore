const VideoGame = require('../models/videoGame.model')

const save = async (req, res, next) => {
    try {
        const data = req.body
        const newVideoGame = new VideoGame(data)
        const savedVideoGame = await newVideoGame.save()
        if (!savedVideoGame) {
            throw new Error('')
        }
        res.status(201).json({
            message: ''
        })
    } catch (err) {
        next(err)
    }
}

const getAll = async (res, next) => {
    try {
        const videoGames = await VideoGame.find()
        res.status(200).json(videoGames)
    } catch (err) {
        next(err)
    }
}

const getById = async (req, res, next) => {
    try {
        const id = req.params.id
        const videoGame = await VideoGame.findById(id)
        if (!videoGame) {
            throw new Error('')
        } 
        res.status(200).json(videoGame)
    } catch (err) {
        next(err)
    }
}

const update = async () => {
    try {
        const data = req.body
        const id = req.params.id
        const videoGame = await VideoGame.findById(id)
        if(!videoGame) {
            throw new Error('')
        }
        const newVideoGame = await VideoGame.findByIdAndUpdate(id, data, {new: true})
        res.status(200).json(newVideoGame)
    } catch (err) {
        next(err)
    }
}

const remove = async () => {
    const id = req.params.id
    const videoGame = await VideoGame.findById(id)
    if(!videoGame) {
        throw new Error('')
    }
    await VideoGame.findByIdAndDelete(id)
}

module.exports = {
    save,
    getAll,
    getById,
    update,
    remove
}