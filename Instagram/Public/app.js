const placeHolder = document.querySelectorAll('form div span');
const inputs = document.querySelectorAll('form div input');
const showPass = document.querySelector('.password .show-pass');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#login');

placeHolder.forEach((e) => {
    e.addEventListener('click', () => {
        e.previousElementSibling.focus();
        if (e.textContent == 'Password') {
            showPass.style.display = 'block';
        } else {}
    })
})

inputs.forEach((e) => {
    e.addEventListener('keypress', () => {
        e.classList.add('input-c');
        e.nextElementSibling.classList.add('small-p');
    })

    e.addEventListener('focus', () => {
        e.parentElement.classList.add('input-b');
        if (e.nextElementSibling.textContent == 'Password') {
            showPass.style.display = 'block';
        } else {}
    })

    e.addEventListener('focusout', () => {
        e.parentElement.classList.remove('input-b');

        if (e.value == "") {
            e.classList.remove('input-c');
            e.nextElementSibling.classList.remove('small-p');
        } else {

        }
    })
})

showPass.addEventListener('click', () => {
    if (showPass.textContent == 'Hide') {
        showPass.textContent = 'Show';
        password.setAttribute('type', 'password');
    } else {
        showPass.textContent = 'Hide';
        password.setAttribute('type', 'text');

    }
})

loginBtn.addEventListener('click', () => {
    var condition;
    inputs.forEach((e) => {
        if (e.value == '') {
            condition = false;
            return false;
        } else {
            condition = true;
            return true;
        }
    })

    // if (condition) {
    //     document.querySelector('form').setAttribute('action', 'https://www.instagram.com/p/Cm8QlMFoMJ6/')
    // } else {}
})