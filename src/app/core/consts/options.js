const REGISTRATION_OPTIONS = [
    {
        tag: 'input',
        class: 'user__input',
        attributes: [{ required: true }, { placeholder: "Логин" }, { type: "text" }]
    },
    {
        tag: 'span',
        class: ['error-message', 'error-message_registration-login']
    },
    {
        tag: 'input',
        class: 'user__input',
        attributes: [{ required: true }, { placeholder: "Пароль" }, { type: "password" }, { 'data-input': '1' }]
    },
    {
        tag: 'a',
        class: 'btn-show-password',
        attributes: [{ href: '#' }, { 'data-btn': '1' }],
        text: 'показать пароль'
    },
    {
        tag: 'span',
        class: ['error-message', 'error-message_registration-password-first']
    },
    {
        tag: 'input',
        class: 'user__input',
        attributes: [{ required: true }, { placeholder: "Повторите пароль" }, { type: "password" }, { 'data-input': '2' }]
    },
    {
        tag: 'a',
        class: 'btn-show-password',
        attributes: [{ href: '#' }, { 'data-btn': '2' }],
        text: 'показать пароль'
    },
    {
        tag: 'span',
        class: ['error-message', 'error-message_registration-password-second']
    },
    {
        tag: 'button',
        class: ['btn', 'registration__btn'],
        content: 'Зарегистрироваться',
        attributes: [{ type: "submit" }]
    }
]

const LOGIN_OPTIONS = [
    {
        tag: 'input',
        class: 'user__login-input',
        attributes: [{ required: true }, { placeholder: "Логин" }, { type: "text" }]
    },
    {
        tag: 'span',
        class: ['error-message', 'error-message_login']
    },
    {
        tag: 'input',
        class: 'user__login-input',
        attributes: [{ required: true }, { placeholder: "Введите пароль" }, { type: "password" }, { 'data-input': 'input' }]
    },
    {
        tag: 'a',
        class: 'btn-show-password',
        attributes: [{ href: '#' }, { 'data-btn': 'password' }],
        text: 'показать пароль'
    },
    {
        tag: 'span',
        class: ['error-message', 'error-message_password']
    },
    {
        tag: 'button',
        class: ['btn', 'login-btn'],
        content: 'Войти',
        attributes: [{ type: "submit" }]
    }
]

export { REGISTRATION_OPTIONS, LOGIN_OPTIONS }