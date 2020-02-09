const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/95bbe2ee4351f49a1e7ab2f256753934/'+ latitude +','+ longitude +'?units=si'
    request({url, json:true}, (error, {body}) => {
        
        if(error) {
            callback('Unable to connect to the weather service!')
        } else if(body.error) {
            callback('Unable to find location')
        } else {
            console.log('Check this out:', body.daily.data[0])
            callback(undefined, body.daily.data[0].summary + ' current temp is: ' + body.currently.temperature + ' degrees There is a ' + body.currently.precipProbability +'% chance of rain. The wind speek is about ' +body.currently.windSpeed)
            
        }
    })

}

module.exports = forecast