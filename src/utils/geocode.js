const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiZWxpbjcwNyIsImEiOiJjazY5Y2U0dDMwZDU3M2RwbWZ1Ym50cXAxIn0.J8tTNSSQ_IkFVGZi3fat5A&limit=1'

    request({url, json:true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services!')
        } else if(body.features.length === 0) {
            callback('Unable to find location, try a different search')
        } else {
            
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name  
            })

        }
    })
}

module.exports = geoCode