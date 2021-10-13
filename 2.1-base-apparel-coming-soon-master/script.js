const button = document.body.querySelector('button');

// main program
button.addEventListener('click', emailValidation);


// 
function emailValidation() {
    const inputValue = document.body.querySelector('input').value;
    let validEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (inputValue === '') {
        setError();
    } else if ( !inputValue.match(validEmail) ) {
        setError();
    } else {
        setOk();
    }
}


// 
const input = document.body.querySelector('input');
const errorIcon = document.body.querySelector('.error-icon');


function setError() {
    input.className = "";
    errorIcon.className = ".error-icon";

    input.classList.add('error');
    errorIcon.classList.add('error');

}
function setOk() {
    input.className = '';
    errorIcon.className = 'error-icon';

    input.classList.add('OK');
}

