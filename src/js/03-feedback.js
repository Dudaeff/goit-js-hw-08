import { save, load, remove } from './storage';
const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.js-feedback-form');
const emailInput = document.querySelector('.js-feedback-form input');
const messageInput = document.querySelector('.js-feedback-form textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";

feedbackForm.addEventListener('submit', onFormSubmit);
emailInput.addEventListener('input', throttle(saveDataOnImput, 500));
messageInput.addEventListener('input', throttle(saveDataOnImput, 500));

updateInputs();

function onFormSubmit(e) {
    e.preventDefault();

    feedbackForm.reset();
    showFeedback();
};

function saveDataOnImput() {
    const feedback = {
        email: emailInput.value,
        message: messageInput.value,
    }
    save(LOCALSTORAGE_KEY, feedback);
};
       
function showFeedback() {
    const feedback = load(LOCALSTORAGE_KEY);
    console.log(feedback);
};

function updateInputs() {
    const storageData = load(LOCALSTORAGE_KEY) || '';

    emailInput.value = storageData.email || '';
    messageInput.value = storageData.message || '';

    remove(LOCALSTORAGE_KEY);
};