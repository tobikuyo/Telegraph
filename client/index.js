const formTitle = document.querySelector('.form__title');
const formPseudonym = document.querySelector('.form__pseudonym');
const formText = document.querySelector('.form__text');
const submit = document.querySelector('.form__submit');

submit.addEventListener('click', makePost);

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
                title: formTitle.value,
                pseudonym: formPseudonym.value || 'anonymous',
                text: formText.value
            })
        };

        const response = await fetch('http://localhost:5000/api/posts', option);
        const post = await response.json();
        const { title, pseudonym, text } = post.data;

        formTitle.value = title;
        formPseudonym.value = pseudonym;
        formText.value = text;
        submit.style.visibility = 'hidden';
    } catch (err) {
        console.warn(err);
    }
}
