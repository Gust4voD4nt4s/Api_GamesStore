const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { security } = require('../utils/constants')

const save = async (req, res, next) => {
    try {
        const data = req.body
        const hash = await bcrypt.hash(data.password, 10)
        data.password = hash
        const newUser = new User(data)
        const savedUser = await newUser.save()
        if (!savedUser) {
            throw new Error('User cold not be saved')
        }
        res.status(201).json({
            message: 'New User created'
        })
    } catch (err) {
        next(err)
    }
}

const getAll = async (req, res, next) => {
    try {
        const users = await User.find()
        for(let user of users){
            user.password = undefined
        }
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}

const getById = async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if (!user) {
            throw new Error(`User with id ${id} not found`)
        } 
        user.password = undefined
        res.status(200).json(User)
    } catch (err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const data = req.body
        const id = req.params.id
        const user = await User.findById(id)
        if(!user) {
            throw new Error(`User with id ${id} not found`)
        }
        data.password = user.password
        const newUser = await User.findByIdAndUpdate(id, data, {new: true})
        newUser.password = undefined
        res.status(200).json(newUser)
    } catch (err) {
        next(err)
    }
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if(!user) {
            throw new Error(`User with id ${id} not found`)
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({
            message: `User with id ${id} has deleted`
        })
    } catch (err) {
        next(err)
    }
}

const authenticate = async (req, res, next) => {
    try {
        const {username, password} = req.body
        if (!(username && password)) {
            throw new Error('Username and password are required')
        }

        const user = await User.findOne({username: username,})
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({
                sub: user._id,
                iss: security.iss,
                username: user.username,
                name: user.name
            }, security.secret, {
                expiresIn: security.expires
            })
            res.status(200).json(token)
        } else {
            throw new Error('Username and password invalid')
        }
    } catch (err) {
        next(err)
    } 
}

module.exports = {
    save,
    getAll,
    getById,
    update,
    remove,
    authenticate
}