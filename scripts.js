const inputEmail = document.getElementById('email');
const submitBtn = document.getElementById('email-btn');
const errorMessage = document.querySelector('.error-message')
const emailRegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const inputValidation = () => {
    if(emailRegExp.test(inputEmail.value) && inputEmail.value.length != 0) {
        errorMessage.classList.remove('visible');
        inputEmail.classList.remove('error-ph');
        inputEmail.classList.remove('error-input');

    } else {
        inputEmail.placeholder = 'example@email/com';
        errorMessage.classList.add('visible');
        inputEmail.classList.add('error-input')
        inputEmail.classList.add('error-ph');
    }
}

inputEmail.addEventListener('keyup', inputValidation);
inputEmail.addEventListener('blur', inputValidation);


submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();
});
