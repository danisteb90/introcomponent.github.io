// Elementos del input

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const emailAddress = document.getElementById('email');
const password = document.getElementById('pass');

// Elementos del contenedor error

const errorName = document.getElementById('errorName');
const errorLast = document.getElementById('errorLast');
const errorEmail = document.getElementById('errorEmail');
const errorPass = document.getElementById('errorPass');

// Botón

const button = document.getElementById('button');

button.addEventListener('click', (event) => {
    validateEmpty(firstName.value, firstName, errorName, 'First Name cannot be empty');
    validateEmpty(lastName.value, lastName, errorLast, 'Last Name cannot be empty');
    validateEmail(emailAddress.value, emailAddress, errorEmail);
    validatePassword(password.value, password, errorPass, 'Password cannot be empty');
});

function validateEmail(inputValue, divInput, divError, nameInput){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(inputValue)){
        hideError(divInput, divError)
    } else {
        showError(divInput, divError, "Looks like this is not an email")
    }
}

function validatePassword(inputValue, divInput, divError, nameInput){
    let regExpP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if(regExpP.test(inputValue)){
        hideError(divInput, divError);
    } else {
        showError(divInput, divError, "Please write a password that contains at least 8 chars, 1 uppercase, 1 lowercase and 1 number")
    }
}

function validateEmpty(inputValue, divInput, divError, nameInput){
    if(inputValue.length == 0){
        showError(divInput, divError, nameInput);
    } else {
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, error){
    divInput.style.border = '1px solid red';
    divError.innerHTML = `<img class="iconError" src="images/icon-error.svg" alt="icon_error">
    <p class="errorp">${error}</p>`;
}

function hideError(divInput, divError){
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = '';
}