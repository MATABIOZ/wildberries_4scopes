export function successAuthentication(formClass) {
    const form = document.querySelector(formClass, message)
    const parent = form.parentNode
    parent.innerHTML = null
    const successContainer = document.createElement('div')
    const successMessage = document.createElement('span')
    successContainer.classList.add('success-container')
    successMessage.classList.add('success-message')
    successMessage.textContent = message
    successContainer.appendChild(successMessage)
    parent.append(successContainer)
    setTimeout(function () {
        parent.remove()
    }, 3000)
}