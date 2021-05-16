const request = require('postman-request')

// -------------------------- Weather Stack API Request --------------------------

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=aa0233690f1f1b8f59a265ba42441c93&query=' + latitude +',' + longitude 

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, "Observation was taken at " + body.current.observation_time + ".\n" + body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out. " + "Humidity is " + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast
