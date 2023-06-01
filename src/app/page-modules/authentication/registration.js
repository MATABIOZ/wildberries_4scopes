import { Api } from '../../core/API/registrationApi.js'
import { REGISTRATION_OPTIONS } from '../../core/consts/options.js'

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

function submitForm(event) {
    event.preventDefault()
    addInputsValues()
    resetErrorMessage()
}

function createForm() {
    const form = document.createElement('form')
    form.classList.add('user__registration-form')
    createFormElements(form)
    registrationWrapper.appendChild(form)
}

function createFormElements(form) {
    REGISTRATION_OPTIONS.forEach(option => {
        const element = document.createElement(option.tag)

        if (Array.isArray(option.class) && option.class.length > 0) {
            option.class.forEach(className => element.classList.add(className));
        } else {
            element.classList.add(option.class);
        }

        if (option.id) {
            element.id = option.id
        }
        if (option.text) {
            element.textContent = option.text
        }

        if (option.content) {
            element.textContent = option.content
        }
        if (option.dataset) {
            element.dataset.data = option.dataset.data;
        }

        if (option.attributes && option.attributes.length > 0) {
            option.attributes.forEach(attribute => {
                const [key, value] = Object.entries(attribute)[0]
                element.setAttribute(key, value)
            });
        }

        form.appendChild(element)
    })
}

async function addInputsValues() {
    let inputs = document.querySelectorAll('.user__input')
    let values = []
    let SpecialSymbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ';', ':', "'", '"', '<', '>', ',', '.', '?', '/', '`', '~', ' ']
    const SpecialSymbols = "!@#$%^&*()-_+={}[]|\\;:'\"<>.,/?`~";
    const errorMessageRegistrationLogin = document.querySelector('.error-message_registration-login')
    const errorMessageRegistrationPasswordFirst = document.querySelector('.error-message_registration-password-first')
    const errorMessageRegistrationPasswordSecond = document.querySelector('.error-message_registration-password-second')

    inputs.forEach(element => {
        values.push(element.value)
    })

    const person = {
        login: values[0],
        password: values[1],
    }

    let userData = await Api.getApi(person.login);
    const minLogin = 3;
    const minPassword = 8;
    const maxSymbols = 20;
    const showSymbolsLengthErrorMessage = (element, min, max, credentialName) => element.textContent = `${credentialName} должен содержать от ${min} до ${max} символов`
    const currentPasswordLength = person.password.length;
    const currentLoginLength = person.login.length;

    if (values[1] !== values[2]) {
        errorMessageRegistrationPasswordFirst.textContent = 'Пароль не совпадает'
        errorMessageRegistrationPasswordSecond.textContent = 'Пароль не совпадает'
    } else if (SpecialSymbolsArray.some(symbol => person.login.includes(symbol))) {
        errorMessageRegistrationLogin.textContent = `Логин не должны содержать пробелы и символы: ${SpecialSymbols}`
    } else if (currentPasswordLength < minPassword || currentPasswordLength > maxSymbols) {
        showSymbolsLengthErrorMessage(errorMessageRegistrationPasswordFirst, minPassword, maxSymbols, 'Пароль')
    } else if (currentLoginLength < minLogin || currentLoginLength > maxSymbols) {
        showSymbolsLengthErrorMessage(errorMessageRegistrationLogin, minLogin, maxSymbols, 'Логин')
    } else if (userData !== undefined) {
        errorMessageRegistrationLogin.textContent = `Пользователь с логином "${person.login}" уже зарегистрирован`
    } else {

        successRegistration()
        Api.setApi(person.login, person.password)
        setTimeout( function() {
            location.reload()
        }, 1000)
       
    }
}

function successRegistration() {
    const form = document.querySelector('.user__registration-form');
    const successContainer = document.createElement('div');
    const successMessage = document.createElement('span');
    successContainer.classList.add('success-container');
    successMessage.classList.add('success-message');
    successMessage.textContent = 'Регистрация прошла успешно \u2705';
    successContainer.appendChild(successMessage);
    const parent = form.parentNode;
    parent.replaceChild(successContainer, form);
}

function resetErrorMessage() {
    const errorMessageRegistrationLogin = document.querySelector('.error-message_registration-login')
    const errorMessageRegistrationPasswordFirst = document.querySelector('.error-message_registration-password-first')
    const errorMessageRegistrationPasswordSecond = document.querySelector('.error-message_registration-password-second')
    errorMessageRegistrationLogin.textContent = ''
    errorMessageRegistrationPasswordFirst.textContent = ''
    errorMessageRegistrationPasswordSecond.textContent = ''
    
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
            let neededText = btn.text === 'показать пароль' ? 'скрыть пароль' : 'показать пароль'
            btn.text = neededText
        });
    });
}

btnClose.addEventListener('click', function () {
    registrationWrapper.classList.remove('user__registration_active')
})

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

function resetForm() {
    document.querySelector('.user__registration-form').reset()
    document.querySelector('[data-input="1"]').type = 'password'
    document.querySelector('[data-input="2"]').type = 'password'
    const btnShow1 = document.querySelector('[data-btn="1"]').text = 'показать пароль'
    const btnShow2 = document.querySelector('[data-btn="2"]').text = 'показать пароль'
    resetErrorMessage()
}

function init() {
    createForm()
    showPassword()
}

document.addEventListener('DOMContentLoaded', init)

export { registrationWrapperAddClassActive }