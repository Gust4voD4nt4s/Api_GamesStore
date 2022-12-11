const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    try {
        const authorization = req.header('authorization')
        let token = undefined
        if (authorization) {
            const parts = authorization.split(' ')
            if (parts.length === 2 && parts[0] == 'Bearer') {
                token = parts[1]
            }
        }

        if (!token) {
            throw new Error('A token is required to acess this endpoint')
        }

        const decoded = jwt.verify(token, '123456')

        req.authenticated = decoded

        next()

    } catch (err) {
        next(err)
    }
}

module.exports = verifyToken