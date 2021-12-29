const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4403e3690b3769d16ad28d2db3876f5c`;

  //   const darkSky_url =
  //     'https://api.darksky.net/forecast/' + process.env.DARK_NET_API_KEY + '/' +
  //     latitude +
  //     ',' +
  //     longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!' + error, undefined);
    } else {
      callback(undefined, body.weather[0].description);
    }
  });
};

module.exports = forecast;
