require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const passport = require('passport')
//const initializePassport = require('./passport_config')
const {PORT} = process.env
const app = express()
const port = PORT || 5000
const {registerUser} = require('./backend/databaseFunctions')
const {findBreweries} = require('./backend/beerApiFunctions')

//initializePassport(passport)
app.use(bodyParser.json())

//Database
app.post('/register_user', registerUser)
//app.post('/login_user', loginUser)


//Api
app.post('/find_breweries', findBreweries)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}
app.listen(port, () => { console.log(`Server listening on port ${port}..`) });