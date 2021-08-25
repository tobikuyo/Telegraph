(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const { title, pseudonym, text, submit } = require('./index');

async function makePost(e) {
    e.preventDefault();
    try {
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                pseudonym: pseudonym.value,
                text: text.value
            })
        };
        const response = await fetch('http://localhost:5000/api/posts', option);
        const data = await response.json();
        console.log(data);
        // if (err) {
        //     throw Error(err);
        // } else {
        //     window.location.hash = `/${id}`;
        // }
    } catch (err) {
        console.warn(err);
    }
}

module.exports = { makePost };

},{"./index":undefined}],2:[function(require,module,exports){
const { makePost } = require('./handlers');

const title = document.querySelector('.form__title');
const pseudonym = document.querySelector('.form__pseudonym');
const text = document.querySelector('.form__text');
const submit = document.querySelector('.form__submit');

submit.addEventListener('click', makePost);
module.exports = { title, pseudonym, text, submit };

},{"./handlers":1}]},{},[2]);
