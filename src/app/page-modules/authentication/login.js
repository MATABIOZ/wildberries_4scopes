import { LOGIN_OPTIONS } from '../../core/consts/options.js'
import { AuthenticationApi } from '../../core/API/authenticationApi.js'
import { UsersStore } from '../../stores/users-store/users-store.js'
import { createForm } from '../../core/utils/authentication/create-form.js'
import { changeToken } from '../../core/utils/authentication/change-token.js'
import { successAuthentication } from '../../core/utils/authentication/success-authentication.js'
import { AlertService } from '../../core/services/alert-service/alertService.js'

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

async function singIn() {
    let inputs = document.querySelectorAll('.user__login-input')
    let inputsValue = []
    const errorMessageLogin = document.querySelector('.error-message_login')
    const errorMessagePassword = document.querySelector('.error-message_password')

    inputs.forEach(el => {
        inputsValue.push(el.value)
    })

    let userData = await AuthenticationApi.getUserByLogin(inputsValue[0])

    if (!userData || userData.password !== inputsValue[1]) {
        errorMessageLogin.textContent = 'Неверный логин или пароль'
        errorMessagePassword.textContent = 'Неверный логин или пароль'
    } else {
        successAuthentication('.user__login-form', 'Вы вошли \u2713')
        AlertService.access('Вы вошли \u2713')
        UsersStore.setTokenStore(userData.token)
        localStorage.setItem('basketStore', JSON.stringify(userData.orders))
        changeToken()
    }
}

function showLoginPassword() {
    const btn = document.querySelector('[data-btn="password"]')
    const input = document.querySelector('[data-input="input"]')

    btn.addEventListener('click', function () {
        neededType = input.type === 'password' ? 'text' : 'password'
        input.type = neededType
        neededText = btn.textContent === 'показать пароль' ? 'скрыть пароль' : 'показать пароль'
        btn.textContent = neededText
    })
}

function resetErrorMessage() {
    const errorMessageLogin = document.querySelector('.error-message_login')
    const errorMessagePassword = document.querySelector('.error-message_password')
    errorMessageLogin.textContent = null
    errorMessagePassword.textContent = null
}

function resetLoginForm() {
    const loginForm = document.querySelector('.user__login-form')
   if(loginForm) {
    loginForm.reset()
    const btn = document.querySelector('[data-btn="password"]').textContent = 'показать пароль'
    const input = document.querySelector('[data-input="input"]').type = 'password'
    resetErrorMessage()
   }
}

function submitLoginForm(event) {
    event.preventDefault()
    singIn()
    resetErrorMessage()
}

function init() {
    createForm('user__login-form', LOGIN_OPTIONS, loginWrapper)
    showLoginPassword()
}

document.addEventListener('DOMContentLoaded', init)

export { loginWrapperAddClassActive }