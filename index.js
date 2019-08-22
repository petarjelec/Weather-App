const request = require('request')
const argv = require('yargs').argv;

let apiKey = '134a67cab6f6a8e419c4c02ee3dcfab6';
let city = argv.c || 'Mostar';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`


request(url, function (err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);

    }
});

