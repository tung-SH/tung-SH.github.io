/***************************************************
 * 
 *              CHECK 4 INPUTS
 * 
 */

// input
const button = document.body.querySelector('button');

button.addEventListener('click', checkInputs);


// process
function checkInputs(event) {
    event.preventDefault()

    const fNameValue = document.body.querySelector('input[placeholder="First Name"]').value;
    const lNameValue = document.body.querySelector('input[placeholder="Last Name"]').value;
    const emailValue = document.body.querySelector('input[placeholder="Email Address"]').value;
    const passwordValue = document.body.querySelector('input[placeholder="Password"]').value;
    let validEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;   

    resetAllClass()

    if (fNameValue === '') {
        setError(fName);
    } 
    if (lNameValue === '') {
        setError(lName);
    }
    if (emailValue === '') {
        setError(email);
    } else if ( !emailValue.match(validEmail) ) {
        setError(email);
    }
    if (passwordValue === '') {
        setError(password)
    }
}

// output
const fName = document.body.querySelector('input[placeholder="First Name"]');
const lName = document.body.querySelector('input[placeholder="Last Name"]');
const email = document.body.querySelector('input[placeholder="Email Address"]');
const password = document.body.querySelector('input[placeholder="Password"]');

function setError(el) {
    el.classList.add('error')

}

function resetAllClass() {
    fName.className = "";
    lName.className = "";
    email.className = "";
    password.className = "";
    
}