const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const db = require('./src/utils/db')
const videoGameRouter = require('./src/routes/videoGame.route')
const gameRouter = require('./src/routes/game.route')
const port = 3000

app.use(bodyParser.json())

app.get("/", (res) => {
    res.send('api_game_store is running')
})

app.use('/api/v1/videoGame', videoGameRouter)
app.use('/api/v1/game', gameRouter)

app.use((error, res) => {
    console.log('Error', error)
    res.status(500).json({errorMessage: error.message})
})

app.listen(port, () => {
    console.log(`api_game_store running on port ${port}`)
})