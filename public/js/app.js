const form = document.querySelector('form');
const search = document.querySelector('input');
const m1 = document.querySelector('#message-1');
const m2 = document.querySelector('#message-2');
const imgSrc = document.querySelector('#icon');
const temp = document.querySelector('#temp');

const submitFun = (e) => {
  e.preventDefault();

  m1.textContent = 'Loading...';
  m2.textContent = '';
  temp.textContent = '';
  imgSrc.src = '';
  imgSrc.classList.add('hidden');

  const location = search.value;

  fetch(`/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        m1.textContent = data.error;
      } else {
        imgSrc.classList.remove('hidden');
        imgSrc.src = `https://openweathermap.org/img/wn/${data.forecastData.weather[0].icon}@2x.png`;
        m1.textContent = data.location;
        m2.textContent = data.forecastData.weather[0].description;
        temp.textContent =
          (data.forecastData.main.temp - 273.15).toFixed(0) + '°C';
      }
    });
  });
};

form.addEventListener('submit', submitFun);
