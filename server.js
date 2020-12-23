require('dotenv').config()
const bodyParser = require('body-parser')
const {PORT} = process.env
const express = require('express')
const app = express()
const port = PORT || 5000
const {getUser} = require('./backend/databaseFunctions')
const {getBreweries} = require('./backend/beerApiFunctions')

app.use(bodyParser.json())

//Database
app.post('/get_user', getUser)

//Api
app.get('/get_breweries', getBreweries)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}
app.listen(port, () => { console.log(`Server listening on port ${port}..`) });