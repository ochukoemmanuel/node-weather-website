const form = document.querySelector('form');
const search = document.querySelector('input');
const m1 = document.querySelector('#message-1');
const m2 = document.querySelector('#message-2');

const submitFun = (e) => {
  e.preventDefault();

  m1.textContent = 'Loading...';
  m2.textContent = '';

  const location = search.value;

  fetch(`/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        m1.textContent = data.error;
      } else {
        m1.textContent = data.location;
        m2.textContent = data.forecastData;
      }
    });
  });
};

form.addEventListener('submit', submitFun);
