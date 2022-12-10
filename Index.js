const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get("/", (res) => {
    res.send('apiGameStores is running')
})

app.use((error, res) => {
    console.log('Error', error)
    res.status(500).json({errorMessage: error.message})
})

app.listen(port, () => {
    console.log(`apiGameStores running on port ${port}`)
})