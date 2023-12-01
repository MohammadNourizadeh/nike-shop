const form = document.getElementById('my-form')
const emailInput = document.getElementById('email-input')
const passwordInput = document.getElementById('password-input')
const emailError = document.getElementById('email-error')
const passwordError = document.getElementById('password-error')

const personEmail = 'mo.nourizadeh1@gmail.com'
const personPass = 'Nono8282'

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (emailInput.value === '') {
        emailError.innerText = 'Enter your email'
        emailInput.classList.add('border-danger')
        emailError.classList.add('text-danger')
    } else {
        emailError.innerText = ''
        emailInput.classList.remove('border-danger')
        emailInput.classList.add('border-success')
    }



    if (passwordInput.value === '') {
        passwordError.innerText = 'Enter your password'
        passwordInput.classList.add('border-danger')
        passwordError.classList.add('text-danger')
    } else if (passwordInput.value.length <= 6 && passwordInput.value.length >= 1) {
        passwordError.innerText = 'Enter a password with more than 6 character'
        passwordInput.classList.add('border-danger')
        passwordError.classList.add('text-danger')
    } else {
        passwordError.innerText = ''
        passwordInput.classList.remove('border-danger')
        passwordInput.classList.add('border-success')
    }

    if (emailInput.value !== '' && passwordInput.value !== '' && passwordInput.value.length >= 6 && emailInput !== personEmail.value && passwordInput.value !== personPass) {
        alert('incorrect email or password')
    }

    if (emailInput.value !== '' && passwordInput.value !== '' && passwordInput.value.length >= 6 && personEmail === emailInput.value && passwordInput.value === personPass) {
        window.location.replace("../../nike-shop.html");
    }

})