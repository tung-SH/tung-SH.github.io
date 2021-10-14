// main program - level 1
const button = document.body.querySelector('button');

button.addEventListener('click', () => {
    checkEmail()
})

// level 2
function checkEmail() {
    const emailValue = document.body.querySelector('input').value
    let validEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    resetAllClass()

    if ( emailValue.match(validEmail) ) {
        setOk()
    } else {
        setError()
    }
}

// level 3
const input = document.body.querySelector('input');

function setOk() {
    input.classList.add('Ok')
}

function setError() {
    input.classList.add('error')
}

function resetAllClass() {
    input.className = '';
}
