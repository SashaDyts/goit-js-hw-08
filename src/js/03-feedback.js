import throttle from 'lodash.throttle';

const inputEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');
const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onFormElInput, 500));
formEl.addEventListener('submit', onFormElSubmit);

const data = {};

if (localStorage.getItem('feedback-form-state')) {
  const localStorageData = JSON.parse(localStorage.getItem('feedback-form-state'));
  const { email = '', message = '' } = localStorageData;

  inputEl.value = email;
  textAreaEl.value = message;

  data.email = email;
  data.message = message;
}

function onFormElInput(evt) {
  data[evt.target.name] = evt.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onFormElSubmit(evt) {
  evt.preventDefault();

  evt.target.reset();
  localStorage.clear();

  console.log(data);
}
