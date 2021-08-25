const { makePost } = require('./handlers');

const title = document.querySelector('.form__title');
const pseudonym = document.querySelector('.form__pseudonym');
const text = document.querySelector('.form__text');
const submit = document.querySelector('.form__submit');

submit.addEventListener('click', makePost);
module.exports = { title, pseudonym, text, submit };
