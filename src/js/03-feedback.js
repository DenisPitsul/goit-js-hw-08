import throttle from "lodash.throttle";

const FORM_SATE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const { email, message } = feedbackForm.elements;
let formData = {};
onLoadPage();

feedbackForm.addEventListener('input', throttle(onInputChange, 500));
feedbackForm.addEventListener('submit', onFormSubmit)

function onInputChange() {
    formData = {
        email: email.value,
        message: message.value
    };
    localStorage.setItem(FORM_SATE_KEY, JSON.stringify(formData));
}

function onLoadPage() {
    formData = JSON.parse(localStorage.getItem(FORM_SATE_KEY));
    if(formData) {
        email.value = formData.email || '';
        message.value = formData.message || '';
    }
}

function onFormSubmit(e) {
    e.preventDefault();

    if(!email.value.trim() || !message.value.trim())
        return alert('Email or message is empty!');

    console.log({
        email: email.value,
        message: message.value
    });
    localStorage.clear();
    e.currentTarget.reset();
    formData = {};
}
