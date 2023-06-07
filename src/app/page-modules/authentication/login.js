import { LOGIN_OPTIONS } from '../../core/consts/options.js'
import { AuthenticationApi } from '../../core/API/authenticationApi.js'


const submenu = document.querySelector('.user__submenu')

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
    createLoginFormElements(form, LOGIN_OPTIONS)
    loginWrapper.appendChild(form)
}

function createLoginFormElements(form, options) {
    options.forEach(option => {
        const element = document.createElement(option.tag)

        if (Array.isArray(option.class) && option.class.length > 0) {
            option.class.forEach(className => element.classList.add(className))
        } else {
            element.classList.add(option.class)
        }

        option.text && (element.textContent = option.text)
        option.content && (element.textContent = option.content)

        if (option.attributes && option.attributes.length > 0) {
            option.attributes.forEach(attribute => {
                const [firstClass, secondClass] = Object.entries(attribute)[0]
                element.setAttribute(firstClass, secondClass)
            })
        }

        form.appendChild(element)
    })
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
        successLogin()
        sessionStorage.setItem('token', `${userData.token}`)
        userAuthorized() 
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

function successLogin() {
    const form = document.querySelector('.user__login-form')
    const parent = form.parentNode
    parent.innerHTML = null
    const successContainer = document.createElement('div')
    const successMessage = document.createElement('span')
    successContainer.classList.add('success-container')
    successMessage.classList.add('success-message')
    successMessage.textContent = 'Вы вошли \u{1F60A}'
    successContainer.appendChild(successMessage)
    parent.append(successContainer)
    setTimeout(function () {
        parent.remove()
    }, 3000)
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
    createLoginForm()
    showLoginPassword()
}

document.addEventListener('DOMContentLoaded', init)

export { loginWrapperAddClassActive }