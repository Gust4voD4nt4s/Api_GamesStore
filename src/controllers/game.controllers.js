const Game = require('../models/game.model')

const save = async (req, res, next) => {
    try {
        const data = req.body
        const newGame = new Game(data)
        const savedGame = await newGame.save()
        if (!savedGame) {
            throw new Error('game cold not be saved')
        }
        res.status(201).json({
            message: 'New game created'
        })
    } catch (err) {
        next(err)
    }
}

const getAll = async (req, res, next) => {
    try {
        const games = await Game.find()
        res.status(200).json(games)
    } catch (err) {
        next(err)
    }
}

const getById = async (req, res, next) => {
    try {
        const id = req.params.id
        const game = await Game.findById(id)
        if (!game) {
            throw new Error(`Game with id ${id} not found`)
        } 
        res.status(200).json(game)
    } catch (err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const data = req.body
        const id = req.params.id
        const game = await Game.findById(id)
        if(!game) {
            throw new Error(`Game with id ${id} not found`)
        }
        const newGame = await Game.findByIdAndUpdate(id, data, {new: true})
        res.status(200).json(newGame)
    } catch (err) {
        next(err)
    }
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id
        const game = await Game.findById(id)
        if(!game) {
            throw new Error(`Game with id ${id} not found`)
        }
        await Game.findByIdAndDelete(id)
        res.status(200).json({
            message: `Game with id ${id} has deleted`
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