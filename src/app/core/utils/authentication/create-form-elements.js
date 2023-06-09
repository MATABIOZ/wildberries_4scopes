export function createFormElements(form, options) {
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