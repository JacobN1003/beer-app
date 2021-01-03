require('dotenv').config()
const {MONGO_USERNAME, MONGO_PASSWORD, MONGO_URI} = process.env
const { MongoClient } = require('mongodb')
const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const bcrypt = require('bcrypt-nodejs')


exports.registerUser = async function(req, res){
    const {username, password} = req.body
    try{
        await client.connect()
        const user = await client.db('beer-app').collection('users').findOne({"username": username})
        res.send({'message':'ok', 'data': {"user":user}})
    }
    catch(e){
        console.log(e)
        return res.status(400).send({"message": "Failed to retrieve user info"})
    }
    finally {
        await client.close()
    }
}
