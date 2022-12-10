const VideoGame = require('../models/videoGame.model')

const save = async (req, res, next) => {
    try {
        const data = req.body
        const newVideoGame = new VideoGame(data)
        const savedVideoGame = await newVideoGame.save()
        if (!savedVideoGame) {
            throw new Error('Video game cold not be saved')
        }
        res.status(201).json({
            message: 'New video game created'
        })
    } catch (err) {
        next(err)
    }
}

const getAll = async (req, res, next) => {
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
            throw new Error(`Video game with id ${id} not found`)
        } 
        res.status(200).json(videoGame)
    } catch (err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const data = req.body
        const id = req.params.id
        const videoGame = await VideoGame.findById(id)
        if(!videoGame) {
            throw new Error(`Video game with id ${id} not found`)
        }
        const newVideoGame = await VideoGame.findByIdAndUpdate(id, data, {new: true})
        res.status(200).json(newVideoGame)
    } catch (err) {
        next(err)
    }
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id
        const videoGame = await VideoGame.findById(id)
        if(!videoGame) {
            throw new Error(`Video game with id ${id} not found`)
        }
        await VideoGame.findByIdAndDelete(id)
        res.status(200).json({
            message: `Video game with id ${id} has deleted`
        })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    save,
    getAll,
    getById,
    update,
    remove
}