const burgerBtn = document.querySelectorAll('.burger_btn')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.sidebar .btn-close')
const body = document.getElementById('body')

function setBodyStyles(position, width, overflowY) {
    body.style.position = position
    body.style.width = width
    body.style.overflowY = overflowY
}

burgerBtn.forEach(element => {
    element.addEventListener('click', function () {

        if (!sidebar.classList.contains('sidebar_active')) {
            setBodyStyles('fixed', '100%', 'scroll')
            sidebar.classList.add('sidebar_active');
            checkSidebarClass()
        }
    
    });
})

closeBtn.addEventListener('click', function () {

    if (sidebar.classList.contains('sidebar_active')) {
        sidebar.classList.remove('sidebar_active')
        setBodyStyles('', '', '')
    }

});

function checkSidebarClass() {

    if (sidebar.classList.contains('sidebar_active')) {
        document.addEventListener('click', removeSidebarClass)
    }

}

function removeSidebarClass(event) {
    if (!sidebar.contains(event.target) && !Array.from(burgerBtn).some(btn => btn.contains(event.target))) {
        sidebar.classList.remove('sidebar_active');
        setBodyStyles('', '', '');
    }

    if (!sidebar.classList.contains('sidebar_active')) {
        document.removeEventListener('click', removeSidebarClass);
    }
}

export { setBodyStyles }