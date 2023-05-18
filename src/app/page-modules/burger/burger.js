const burgerBtn = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.btn-close');
const body = document.getElementById('body');

function setBodyStyles(position, width, overflowY) {
    body.style.position = position;
    body.style.width = width;
    body.style.overflowY = overflowY;
}

burgerBtn.addEventListener('click', function () {
    if (!sidebar.classList.contains('sidebar_active')) {
        setBodyStyles('fixed', '100%', 'scroll')
        sidebar.classList.add('sidebar_active');
    }
});

closeBtn.addEventListener('click', function () {
    if (sidebar.classList.contains('sidebar_active')) {
        sidebar.classList.remove('sidebar_active');
        setBodyStyles('', '', '')
    }
});

document.addEventListener('click', function (event) {
    if (!sidebar.contains(event.target) && !burgerBtn.contains(event.target)) {
        sidebar.classList.remove('sidebar_active');
        setBodyStyles('', '', '')
    }
});