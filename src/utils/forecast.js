const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/95bbe2ee4351f49a1e7ab2f256753934/'+ latitude +','+ longitude +'?units=si'
    request({url, json:true}, (error, {body}) => {
        
        if(error) {
            callback('Unable to connect to the weather service!')
        } else if(body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, body.daily.data[0].summary + ' current temp is: ' + body.currently.temperature + ' degrees. This high today is '+ body.daily.data[0].temperatureHigh +' with a low of: '+ body.daily.data[0].temperatureLow +'. There is a ' + body.currently.precipProbability +'% chance of rain. The wind speed is about ' +body.currently.windSpeed)                        
        }
    })

}

module.exports = forecast