import { AuthenticationApi } from '../../core/API/authenticationApi.js'
import { REGISTRATION_OPTIONS } from '../../core/consts/options.js'

const registrationWrapper = document.querySelector('.user__registration')
const btnClose = document.querySelector('.user__registration-btn-close')
const btnRegistration = document.querySelector('.user__submenu-btn-registration')
const userBtn = document.querySelector('.user-btn')
const submenu = document.querySelector('.user__submenu')

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

function createForm() {
    const form = document.createElement('form')
    form.classList.add('user__registration-form')
    createFormElements(form, REGISTRATION_OPTIONS)
    registrationWrapper.appendChild(form)
}

function createFormElements(form, options) {
    options.forEach(option => {
        const element = document.createElement(option.tag)

        if (Array.isArray(option.class) && option.class.length > 0) {
            option.class.forEach(className => element.classList.add(className))
        } else {
            element.classList.add(option.class)
        }

        option.id && (element.id = option.id)
        option.text && (element.textContent = option.text)
        option.content && (element.textContent = option.content)
        option.dataset && (element.dataset.data = option.dataset.data)

        if (option.attributes && option.attributes.length > 0) {
            option.attributes.forEach(attribute => {
                const [key, value] = Object.entries(attribute)[0]
                element.setAttribute(key, value)
            })
        }

        form.appendChild(element)
    })
}

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
        AuthenticationApi.setUser(person.login, person.password, person.token).then(() => successRegistration())
        sessionStorage.setItem("token", person.token)
        setTimeout(() => chengeToken(), 3000)
    }
}

function chengeToken() {
    const token = sessionStorage.getItem('token')

    if (token) {
        userAuthorized()
        userBtn.classList.add('user-btn_authorized')
    } else {
        userBtn.classList.remove('user-btn_authorized')
        return null
    }
}

async function userAuthorized() {
    const token = sessionStorage.getItem('token')
    const userData = await AuthenticationApi.getUserByToken(token)
    if (userData) {
        const allSubmenuChildren = submenu.children
        submenu.removeChild(allSubmenuChildren[1])
        submenu.removeChild(allSubmenuChildren[1])
        allSubmenuChildren[0].querySelector('.modal-header__title > h2').textContent = `Здравствуйте, ${userData.login}!`
        const btnExit = document.createElement('button')
        btnExit.type = 'button'
        btnExit.classList.add('btn', 'user__submenu-btn-exit')
        btnExit.textContent = 'Выйти из аккаунта'
        submenu.appendChild(btnExit)
        btnExit.addEventListener('click', singOut)
    }
}

function singOut() {
    sessionStorage.removeItem('token')
    location.reload()
}

function successRegistration() {
    const form = document.querySelector('.user__registration-form')
    const parent = form.parentNode
    parent.innerHTML = null
    const successContainer = document.createElement('div')
    const successMessage = document.createElement('span')
    successContainer.classList.add('success-container')
    successMessage.classList.add('success-message')
    successMessage.textContent = 'Регистрация прошла успешно \u2705'
    successContainer.appendChild(successMessage)
    parent.append(successContainer)
    setTimeout(function () {
        parent.remove()
    }, 3000)
}

function resetErrorMessage() {
    const errorMessageRegistrationLogin = document.querySelector('.error-message_registration-login')
    const errorMessageRegistrationPasswordFirst = document.querySelector('.error-message_registration-password-first')
    const errorMessageRegistrationPasswordSecond = document.querySelector('.error-message_registration-password-second')
    errorMessageRegistrationLogin.textContent = null
    errorMessageRegistrationPasswordFirst.textContent = null
    errorMessageRegistrationPasswordSecond.textContent = null

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

function submitForm(event) {
    event.preventDefault()
    addInputsValues()
    resetErrorMessage()
}

function init() {
    createForm()
    showPassword()
    chengeToken()
}

document.addEventListener('DOMContentLoaded', init)

export { registrationWrapperAddClassActive }