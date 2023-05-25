import { getApi } from '../../core/API/registrationApi.js'

const loginWrapper = document.querySelector('.user__login')
const btnClose = document.querySelector('.user__login-btn-close')
const btnLogin = document.querySelector('.user__submenu-btn-login')
const btnRegistration = document.querySelector('.user__submenu-btn-registration')
const userBtn = document.querySelector('.user-btn')

const options = [
    {
        type: 'input',
        class: 'user__login-input',
        attributes: [{ required: true }, { placeholder: "Логин" }, { type: "text" }]
    },
    {
        type: 'input',
        class: 'user__login-input',
        attributes: [{ required: true }, { placeholder: "Введите пароль" }, { type: "password" }, { 'data-input': 'input' }]
    },
    {
        type: 'a',
        class: 'btn-show-password',
        attributes: [{ href: '#' }, { 'data-btn': 'password' }],
        text: 'показать пароль'
    },
    {
        type: 'button',
        class: ['btn', 'login-btn'],
        content: 'Войти',
        attributes: [{ type: "submit" }]
    }
]

function loginWrapperAddClassActive() {
    loginWrapper.classList.add('user__login_active')
    checkLoginWrapperClass()
    userBtn.classList.add('user-btn_active')
    document.querySelector('.login-btn').addEventListener('click', submitLoginForm)
    showLoginPassword()
}

btnClose.addEventListener('click', function() {
    loginWrapper.classList.remove('user__login_active')
    userBtn.classList.remove('user-btn_active')
})

function checkLoginWrapperClass() {

    if(loginWrapper.classList.contains('user__login_active'))  {
        document.addEventListener('click', removeLoginWrapperClassList)
    } 
    
}

function removeLoginWrapperClassList(event) {

    if(!loginWrapper.contains(event.target) && !btnLogin.contains(event.target)){
        loginWrapper.classList.remove('user__login_active')
    }

    if(!loginWrapper.classList.contains('user__login_active')) {
        document.removeEventListener('click', removeLoginWrapperClassList)
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
    options.forEach(option => {
        const element = document.createElement(option.type)

        if(Array.isArray(option.class) && option.class.length > 0) {
            option.class.forEach(className => element.classList.add(className))
        } else {
            element.classList.add(option.class)
        }

        if(option.text) {
            element.text = option.text
        }

        if (option.content) {
            element.textContent = option.content
        }

        if(option.attributes && option.attributes.length > 0) {
            option.attributes.forEach(attribute => {
                const [firstClass, secondClass] = Object.entries(attribute)[0];
                element.setAttribute(firstClass, secondClass);
            });
        }

        form.appendChild(element)
    }); 
}

async function singIn() {
    let inputs = document.querySelectorAll('.user__login-input')
    let inputsValue = []
    
    inputs.forEach(el => {
        inputsValue.push(el.value)
    })

    let userData = await getApi(inputsValue[0])

    if(!userData || userData.password !== inputsValue[1]) {
        alert('Неверный логин или пароль')
    } else {
        alert('Вы вошли')
        resetLoginForm()
    }
}

function showLoginPassword() {
    const btn = document.querySelector('[data-btn="password"]')
    const input = document.querySelector('[data-input="input"]')

    btn.addEventListener('click', function() {
        neededType = input.type === 'password' ? 'text' : 'password';
        input.type = neededType
        neededText = btn.text === 'показать пароль' ? 'скрыть пароль' : 'показать пароль'
        btn.text = neededText
    })
}

function resetLoginForm() {
    document.querySelector('.user__login-form').reset()
    const btn = document.querySelector('[data-btn="password"]').text = 'показать пароль'
    const input = document.querySelector('[data-input="input"]').type = 'password'
}

function submitLoginForm(event) {
    event.preventDefault()
    singIn() 
}

function init() {
    createLoginForm()
}

document.addEventListener('DOMContentLoaded', init)

export { loginWrapperAddClassActive }