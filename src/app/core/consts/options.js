const REGISTRATION_OPTIONS = [
    {
        type: 'input',
        class: 'user__input',
        attributes: [{ required: true }, { placeholder: "Логин" }, { type: "text" }]
    },
    {
        type: 'span',
        class: ['error-message', 'error-message_registration-login']
    },
    {
        type: 'input',
        class: 'user__input',
        attributes: [{ required: true }, { placeholder: "Пароль" }, { type: "password" }, { 'data-input': '1' }]
    },
    {
        type: 'a',
        class: 'btn-show-password',
        attributes: [{ href: '#' }, { 'data-btn': '1' }],
        text: 'показать пароль'
    },
    {
        type: 'span',
        class: ['error-message', 'error-message_registration-password-first']
    },
    {
        type: 'input',
        class: 'user__input',
        attributes: [{ required: true }, { placeholder: "Повторите пароль" }, { type: "password" }, { 'data-input': '2' }]
    },
    {
        type: 'a',
        class: 'btn-show-password',
        attributes: [{ href: '#' }, { 'data-btn': '2' }],
        text: 'показать пароль'
    },
    {
        type: 'span',
        class: ['error-message', 'error-message_registration-password-second']
    },
    {
        type: 'button',
        class: ['btn', 'registration__btn'],
        content: 'Зарегистрироваться',
        attributes: [{ type: "submit" }]
    }
]

const LOGIN_OPTIONS = [
    {
        type: 'input',
        class: 'user__login-input',
        attributes: [{ required: true }, { placeholder: "Логин" }, { type: "text" }]
    },
    {
        type: 'span',
        class: ['error-message', 'error-message_login']
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
        type: 'span',
        class: ['error-message', 'error-message_password']
    },
    {
        type: 'button',
        class: ['btn', 'login-btn'],
        content: 'Войти',
        attributes: [{ type: "submit" }]
    }
]

export { REGISTRATION_OPTIONS, LOGIN_OPTIONS }