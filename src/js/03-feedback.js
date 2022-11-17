import throttle from 'lodash.throttle';

var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

const FORM_KEY = 'feedback-form-state';
const data = {};

form.addEventListener('input', throttle(onFormChange, 500));
form.addEventListener('submit', onFormSubmit);

populateMessage();

function onFormChange(event) {
  const data = { email: email.value, message: message.value };
  const stringifyData = JSON.stringify(data);
  localStorage.setItem(FORM_KEY, stringifyData);
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(FORM_KEY)));
  localStorage.removeItem(FORM_KEY);
}

function populateMessage(event) {
  let savedMessage = JSON.parse(localStorage.getItem(FORM_KEY));
  if (savedMessage) {
    email.value = savedMessage.email;
    message.value = savedMessage.message;
  }
}
