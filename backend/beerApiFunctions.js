const BASE_URL = 'https://api.openbrewerydb.org/breweries'
const fetch = require('request')

exports.getBreweries = function(req, res){
    fetch(BASE_URL + "?page=1&sort=id", (error, response) => {
        if(!error && response.statusCode === 200){
            data = JSON.parse(response.body)
            //console.log(data)
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