const BASE_URL = 'https://api.openbrewerydb.org/breweries'
const fetch = require('request')

exports.findBreweries = function(req, res){
    const {query} = req.body
    
    fetch(BASE_URL + `/search?query=${query}`, (error, response) => {
        if(!error && response.statusCode === 200){
            data = JSON.parse(response.body)
            result = []
            data.map(each => { 
                result.push(each.name)
            })
            res.send({ 'message': "ok", 'status': response.statusCode, 'data': result})
        }
        else{
            console.log(error)
            res.send({ 'message': "bad", 'status': response.statusCode, 'data': {} })
        } 
    })
}