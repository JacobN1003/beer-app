require('dotenv').config()
const {MONGO_USERNAME, MONGO_PASSWORD, MONGO_URI} = process.env
const { MongoClient } = require('mongodb')
const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@beer-app-cluster.0qq3z.mongodb.net/beer-app?retryWrites=true&w=majority`
const client = new MongoClient(MONGO_URI || uri, { useNewUrlParser: true, useUnifiedTopology: true })
const bcrypt = require('bcrypt-nodejs')


exports.getUser = async function(req, res){
    const {username} = req.body
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
