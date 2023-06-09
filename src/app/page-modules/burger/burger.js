import { setBodyStyles } from "../../core/utils/hide-scroll"

const burgerBtn = document.querySelector('.burger')
const burgerFooterBarBtn = document.querySelector('.footer-bar__sidebar-btn')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.sidebar .btn-close')

burgerBtn.addEventListener('click', chengeSidebarClass)
burgerFooterBarBtn.addEventListener('click', chengeSidebarClass)

function chengeSidebarClass() {
    if (!sidebar.classList.contains('sidebar_active')) {
        sidebar.classList.add('sidebar_active')
        setBodyStyles('fixed', '100%', 'scroll')
        checkSidebarClass()
    } else {
        sidebar.classList.remove('sidebar_active')
        setBodyStyles(null, null, null)
    }
}

function checkSidebarClass() {
    if (sidebar.classList.contains('sidebar_active')) {
        document.addEventListener('click', removeSidebarClass)
    } else {
        document.removeEventListener('click', removeSidebarClass)
    }
}

function removeSidebarClass(event) {
    if (!sidebar.contains(event.target) && !burgerBtn.contains(event.target) && !burgerFooterBarBtn.contains(event.target)) {
        sidebar.classList.remove('sidebar_active')
        setBodyStyles(null, null, null)
        checkSidebarClass()
    }
}

closeBtn.addEventListener('click', function () {
    if (sidebar.classList.contains('sidebar_active')) {
        sidebar.classList.remove('sidebar_active')
        setBodyStyles(null, null, null)
    }
})

export { setBodyStyles, checkSidebarClass }