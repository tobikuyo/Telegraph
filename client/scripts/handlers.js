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
    } catch (err) {
        console.warn(err);
    }
}

module.exports = { makePost };
