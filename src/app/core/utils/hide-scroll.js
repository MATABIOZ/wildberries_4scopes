let scrollTop = 0;
let scrollLeft = 0;

export function setBodyStyles(position, width, overflowY) {
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