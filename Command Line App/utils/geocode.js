const request = require('postman-request')

// -------------------------- Geocoding API Request --------------------------

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3RldmVyb2dlcnMiLCJhIjoiY2tvZW96aDJzMGVkNDJ1b2FlZHcwdHM2dSJ9.3zPqtevd2ZRU_lvZmf_i5A&limit=1'

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if(body.features.length==0) {
            callback('Unable to find the location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode