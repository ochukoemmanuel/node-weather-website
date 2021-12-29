const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  //   const darkSky_url =
  //     'https://api.darksky.net/forecast/' + process.env.DARK_NET_API_KEY + '/' +
  //     latitude +
  //     ',' +
  //     longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!' + error, undefined);
    } else {
      callback(undefined, body);
    }
  });
};

module.exports = forecast;
