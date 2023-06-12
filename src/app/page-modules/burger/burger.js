const burgerBtn = document.querySelector('.burger')
const burgerFooterBarBtn = document.querySelector('.footer-bar__sidebar-btn')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.sidebar .btn-close')
const body = document.getElementById('body')

let scrollTop = 0;
let scrollLeft = 0;

function setBodyStyles(position, width, overflowY) {
    if (position === 'fixed') {
        scrollTop = window.scrollY  || document.documentElement.scrollTop;
        scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    }

    body.style.position = position;
    body.style.width = width;
    body.style.overflowY = overflowY;

    if (position !== 'fixed') {
        window.scrollTo(scrollLeft, scrollTop);
    }
}

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

export { setBodyStyles }