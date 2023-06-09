import { createFormElements } from "./create-form-elements"

export function createForm(elementClass, options, container) {
    const form = document.createElement('form')
    form.classList.add(elementClass)
    createFormElements(form, options)
    container.appendChild(form)
}