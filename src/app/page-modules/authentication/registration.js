import { AuthenticationApi } from '../../core/API/authenticationApi.js'
import { REGISTRATION_OPTIONS } from '../../core/consts/options.js'
import { setTokenStore } from '../../stores/users-store/users-store.js'
import { createForm } from '../../core/utils/authentication/create-form.js'
import { changeToken } from '../../core/utils/authentication/change-token.js'
import { successAuthentication } from '../../core/utils/authentication/success-authentication.js'

const registrationWrapper = document.querySelector('.user__registration')
const btnClose = document.querySelector('.user__registration-btn-close')
const btnRegistration = document.querySelector('.user__submenu-btn-registration')
const userBtn = document.querySelector('.user-btn')

function registrationWrapperAddClassActive() {
    registrationWrapper.classList.add('user__registration_active')
    checkRegistrationClass()
}

function checkRegistrationClass() {

    if (registrationWrapper.classList.contains('user__registration_active')) {
        document.addEventListener('click', removeRegistrationClassList)
        userBtn.classList.add('user-btn_active')
        document.querySelector('.registration__btn').addEventListener('click', submitForm)
    }

}

function removeRegistrationClassList(event) {

    if (!registrationWrapper.contains(event.target) && !btnRegistration.contains(event.target)) {
        registrationWrapper.classList.remove('user__registration_active')
    }

    if (!registrationWrapper.classList.contains('user__registration_active')) {
        document.removeEventListener('click', removeRegistrationClassList)
        userBtn.classList.remove('user-btn_active')
        resetForm()
    }

}

btnClose.addEventListener('click', function () {
    registrationWrapper.classList.remove('user__registration_active')
})

async function addInputsValues() {
    let inputs = document.querySelectorAll('.user__input')
    let values = []
    let SpecialSymbolsArray = /[!@#$%^&*()[\]{}|\\;:'"<>.,\/?`~=+\-№_]/
    const SpecialSymbols = "!@#$%^&*()-_+={}[]|\\;:'\"<>.,/?`~№"
    const errorMessageRegistrationLogin = document.querySelector('.error-message_registration-login')
    const errorMessageRegistrationPasswordFirst = document.querySelector('.error-message_registration-password-first')
    const errorMessageRegistrationPasswordSecond = document.querySelector('.error-message_registration-password-second')

    inputs.forEach(element => {
        values.push(element.value)
    })

    const person = {
        login: values[0],
        password: values[1],
        token: Math.random() * (new Date()).getTime()
    }

    let userData = await AuthenticationApi.getUserByLogin(person.login);
    const minLogin = 3;
    const minPassword = 8;
    const maxSymbols = 20;
    const showSymbolsLengthErrorMessage = (element, min, max, credentialName) => element.textContent = `${credentialName} должен содержать от ${min} до ${max} символов`
    const currentPasswordLength = person.password.length;
    const currentLoginLength = person.login.length;

    if (person.login.match(SpecialSymbolsArray)) {
        errorMessageRegistrationLogin.textContent = `Логин не должен содержать пробелы и символы: ${SpecialSymbols}`
    } else if (currentPasswordLength < minPassword || currentPasswordLength > maxSymbols) {
        showSymbolsLengthErrorMessage(errorMessageRegistrationPasswordFirst, minPassword, maxSymbols, 'Пароль')
    } else if (currentLoginLength < minLogin || currentLoginLength > maxSymbols) {
        showSymbolsLengthErrorMessage(errorMessageRegistrationLogin, minLogin, maxSymbols, 'Логин')
    } else if (values[1] !== values[2]) {
        errorMessageRegistrationPasswordFirst.textContent = 'Пароль не совпадает'
        errorMessageRegistrationPasswordSecond.textContent = 'Пароль не совпадает'
    } else if (userData !== undefined) {
        errorMessageRegistrationLogin.textContent = `Пользователь с логином "${person.login}" уже зарегистрирован`
    } else {
        AuthenticationApi.setUser(person.login, person.password, person.token)
        .then(() => successAuthentication('.user__registration-form', 'Регистрация прошла успешно \u2705'))
        setTokenStore(person.token)
        setTimeout(() => changeToken(), 3000)
    }
}

function showPassword() {
    const inputPassword = document.querySelector('[data-input="1"]')
    const inputRepeatPassword = document.querySelector('[data-input="2"]')
    const btnShow1 = document.querySelector('[data-btn="1"]')
    const btnShow2 = document.querySelector('[data-btn="2"]')
    const btns = document.querySelectorAll('.btn-show-password')

    btns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            let input = event.target.getAttribute('data-btn') === '1' ? inputPassword : inputRepeatPassword
            let neededType = input.type === 'password' ? 'text' : 'password'
            input.type = neededType
            let btn = event.target.getAttribute('data-btn') === '1' ? btnShow1 : btnShow2
            let neededText = btn.textContent === 'показать пароль' ? 'скрыть пароль' : 'показать пароль'
            btn.textContent = neededText
        })
    })
}

function resetForm() {
    registrationForm = document.querySelector('.user__registration-form')
    if (registrationForm) {
        registrationForm.reset()
        document.querySelector('[data-input="1"]').type = 'password'
        document.querySelector('[data-input="2"]').type = 'password'
        const btnShow1 = document.querySelector('[data-btn="1"]').textContent = 'показать пароль'
        const btnShow2 = document.querySelector('[data-btn="2"]').textContent = 'показать пароль'
        resetErrorMessage()
    }
}

function resetErrorMessage() {
    const errorMessageRegistrationLogin = document.querySelector('.error-message_registration-login')
    const errorMessageRegistrationPasswordFirst = document.querySelector('.error-message_registration-password-first')
    const errorMessageRegistrationPasswordSecond = document.querySelector('.error-message_registration-password-second')
    errorMessageRegistrationLogin.textContent = null
    errorMessageRegistrationPasswordFirst.textContent = null
    errorMessageRegistrationPasswordSecond.textContent = null
}

function submitForm(event) {
    event.preventDefault()
    addInputsValues()
    resetErrorMessage()
}

function init() {
    createForm('user__registration-form',  REGISTRATION_OPTIONS, registrationWrapper)
    showPassword()
    changeToken()
}

document.addEventListener('DOMContentLoaded', init)

export { registrationWrapperAddClassActive }