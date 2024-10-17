let {checkCondition} = require('./checkWeather')
const weatherData = {
    temperature : 26,
    humidity : 60,
    windSpeed: 10
}

let result = checkCondition(weatherData)
console.log(result);