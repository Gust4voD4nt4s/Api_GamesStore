const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const db = require('./src/utils/db')
const port = 3000

app.use(bodyParser.json())

app.get("/", (res) => {
    res.send('api_game_store is running')
})

app.use((error, res) => {
    console.log('Error', error)
    res.status(500).json({errorMessage: error.message})
})

app.listen(port, () => {
    console.log(`api_game_store running on port ${port}`)
})