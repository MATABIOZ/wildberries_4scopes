import { LOGIN_OPTIONS } from '../../core/consts/options.js'
import { Api } from '../../core/API/registrationApi.js'

const loginWrapper = document.querySelector('.user__login')
const btnClose = document.querySelector('.user__login-btn-close')
const btnLogin = document.querySelector('.user__submenu-btn-login')
const userBtn = document.querySelector('.user-btn')

function loginWrapperAddClassActive() {
    loginWrapper.classList.add('user__login_active')
    addDocumentEvent()
    userBtn.classList.add('user-btn_active')
    document.querySelector('.login-btn').addEventListener('click', submitLoginForm)
}

btnClose.addEventListener('click', function () {
    removeLoginWrapperClassList()
})

function removeLoginWrapperClassList() {
    loginWrapper.classList.remove('user__login_active')
    userBtn.classList.remove('user-btn_active')
}

function addDocumentEvent() {

    if (loginWrapper.classList.contains('user__login_active')) {
        document.addEventListener('click', checkLoginWrapperClass)
    }

}

function checkLoginWrapperClass(event) {

    if (!loginWrapper.contains(event.target) && !btnLogin.contains(event.target)) {
        loginWrapper.classList.remove('user__login_active')
    }

    if (!loginWrapper.classList.contains('user__login_active')) {
        document.removeEventListener('click', checkLoginWrapperClass)
        userBtn.classList.remove('user-btn_active')
        resetLoginForm()
    }
}

function createLoginForm() {
    const form = document.createElement('form')
    form.classList.add('user__login-form')
    createLoginFormElements(form)
    loginWrapper.appendChild(form)
}

function createLoginFormElements(form) {
    LOGIN_OPTIONS.forEach(option => {
        const element = document.createElement(option.type)

        if (Array.isArray(option.class) && option.class.length > 0) {
            option.class.forEach(className => element.classList.add(className))
        } else {
            element.classList.add(option.class)
        }

        if (option.text) {
            element.text = option.text
        }

        if (option.content) {
            element.textContent = option.content
        }

        if (option.attributes && option.attributes.length > 0) {
            option.attributes.forEach(attribute => {
                const [firstClass, secondClass] = Object.entries(attribute)[0]
                element.setAttribute(firstClass, secondClass)
            });
        }

        form.appendChild(element)
    });
}

async function singIn() {
    let inputs = document.querySelectorAll('.user__login-input')
    let inputsValue = []
    const errorMessageLogin = document.querySelector('.error-message_login')
    const errorMessagePassword = document.querySelector('.error-message_password')

    inputs.forEach(el => {
        inputsValue.push(el.value)
    })

    let userData = await Api.getApi(inputsValue[0])

    if (!userData || userData.password !== inputsValue[1]) {
        errorMessageLogin.textContent = 'Неверный логин или пароль'
        errorMessagePassword.textContent = 'Неверный логин или пароль'
    } else {
        successRegistration()
        setTimeout(function () {

            removeLoginWrapperClassList()
            location.reload()
        }, 1000)
    }
}

function successRegistration() {
    const form = document.querySelector('.user__login-form');
    const successContainer = document.createElement('div');
    const successMessage = document.createElement('span');
    successContainer.classList.add('success-container');
    successMessage.classList.add('success-message');
    successMessage.textContent = 'Вы вошли \u{1F60A}';
    successContainer.appendChild(successMessage);
    const parent = form.parentNode;
    parent.replaceChild(successContainer, form);
}

function showLoginPassword() {
    const btn = document.querySelector('[data-btn="password"]')
    const input = document.querySelector('[data-input="input"]')

    btn.addEventListener('click', function () {
        neededType = input.type === 'password' ? 'text' : 'password';
        input.type = neededType
        neededText = btn.text === 'показать пароль' ? 'скрыть пароль' : 'показать пароль'
        btn.text = neededText
    })
}

function resetErrorMessage() {
    const errorMessageLogin = document.querySelector('.error-message_login')
    const errorMessagePassword = document.querySelector('.error-message_password')
    errorMessageLogin.textContent = ''
    errorMessagePassword.textContent = ''
}

function resetLoginForm() {
    document.querySelector('.user__login-form').reset()
    const btn = document.querySelector('[data-btn="password"]').text = 'показать пароль'
    const input = document.querySelector('[data-input="input"]').type = 'password'
    resetErrorMessage()
}

function submitLoginForm(event) {
    event.preventDefault()
    singIn()
    resetErrorMessage()
}

function init() {
    createLoginForm()
    showLoginPassword()
}

document.addEventListener('DOMContentLoaded', init)

export { loginWrapperAddClassActive }