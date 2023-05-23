const registrationWrapper = document.querySelector('.user__registration')
const btnClose = document.querySelector('.user__registration-btn-close')
const btnRegistration = document.querySelector('.user__submenu-btn-registration')
const userBtn = document.querySelector('.user-btn')

const UserData = []

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
}

const options = [
    {
        type: 'input',
        class: 'user__input',
        id: 1,
        attributes: [{ required: true }, { placeholder: "Логин" }, { type: "text" }]
    },
    {
        type: 'input',
        class: 'user__input',
        id: 2,
        attributes: [{ required: true }, { placeholder: "Пароль" }, { type: "password" }, { 'data-input': '1' }]
    },
    {
        type: 'a',
        class: 'btn-show-password',
        attributes: [{ href: '#' }, { 'data-btn': '1' }],
        text: 'показать пароль'
    },
    {
        type: 'input',
        class: 'user__input',
        id: 3,
        attributes: [{ required: true }, { placeholder: "Повторите пароль" }, { type: "password" }, { 'data-input': '2' }]
    },
    {
        type: 'a',
        class: 'btn-show-password',
        attributes: [{ href: '#' }, { 'data-btn': '2' }],
        text: 'показать пароль'
    },
    {
        type: 'button',
        class: ['btn', 'registration__btn'],
        content: 'Зарегистрироваться',
        attributes: [{ type: "submit" }]
    }
]

function createForm() {
    const form = document.createElement('form')
    form.classList.add('user__registration-form')
    createFormElements(form)
    registrationWrapper.appendChild(form)
}

function createFormElements(form) {
    options.forEach(option => {
        const element = document.createElement(option.type)
        element.classList.add(option.class);

        if (Array.isArray(option.class) && option.class.length > 0) {
            option.class.forEach(className => {
                element.classList.add(className);
            });
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
                const [firstClass, secondClass] = Object.entries(attribute)[0];
                element.setAttribute(firstClass, secondClass);
            });
        }

        form.appendChild(element)
    });
}

function addInputsValues() {
    let inputs = document.querySelectorAll('.user__input')
    let values = []

    inputs.forEach(element => {
        values.push(element.value)
    });

    const person = {
        login: values[0],
        password: values[1],
    }

    if (values[1] !== values[2]) {
        alert('Пароль не совпадает')
    } else if (person.login.length < 3) {
        alert('логин должен состоять не менее чем из 3 символов')
    } else if (person.login.includes(' ') || person.password.includes(' ')) {
        alert('логин и пароль не должены содержать пробелы')
    } else if (person.password.length < 8) {
        alert('пароль должен состоять не менее чем из 8 символов')
    } else if (getStore(person.login) !== null) {
        alert('такой пользователь зарегестрирован')
    } else {
        alert('Регистрация прошла успешно')
        UserData.push(person)
        setStore(person.login, person.password)
        resetForm()
    }
}

function showPassword() {
    const inputPassword = document.querySelector('[data-input="1"]');
    const inputRepeatPassword = document.querySelector('[data-input="2"]');
    const btnShow1 = document.querySelector('[data-btn="1"]')
    const btnShow2 = document.querySelector('[data-btn="2"]')
    const btns = document.querySelectorAll('.btn-show-password')

    btns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            let input = event.target.getAttribute('data-btn') === '1' ? inputPassword : inputRepeatPassword;
            let neededType = input.type === 'password' ? 'text' : 'password';
            input.type = neededType;
            let btn = event.target.getAttribute('data-btn') === '1' ? btnShow1 : btnShow2;
            let neededText = btn.text === 'показать пароль' ? 'скрыть пароль' : 'показать пароль';
            btn.text = neededText
        });
    });
}

function setStore(login, val) {
    localStorage.setItem(`${login}`, JSON.stringify(val))
}

function getStore(login) {
    let storeLogin = JSON.parse(localStorage.getItem(login))
    if (storeLogin) {
        return storeLogin
    } else {
        return null
    }
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
    document.querySelector('.user__registration-form').reset();
    document.querySelector('[data-input="1"]').type = 'password'
    document.querySelector('[data-input="2"]').type = 'password'
    const btnShow1 = document.querySelector('[data-btn="1"]').text = 'показать пароль'
    const btnShow2 = document.querySelector('[data-btn="2"]').text = 'показать пароль'
}

function init() {
    createForm()
    showPassword()
}

document.addEventListener('DOMContentLoaded', init);

export { registrationWrapperAddClassActive };

