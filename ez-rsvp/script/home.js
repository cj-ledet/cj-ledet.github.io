const fullscreenDivs = document.querySelectorAll('.fullscreenDiv')
let currentDivIdx = 0;
lastY = 0;

window.addEventListener('scroll', function () {

    if (fullscreenDivs.length <= 1) return;

    y = window.scrollY.toFixed(2);
    scrolledDown = lastY < y;
    lastY = y;

    if (scrolledDown) {
        if (currentDivIdx === fullscreenDivs.length - 1)
            return;
        fullscreenDivs[++currentDivIdx].scrollIntoView({ behavior: 'auto' , block:'start', inline:'nearest', duration:500});
        isAnimating = true;
    } else {
        if (currentDivIdx === 0)
            return;
        fullscreenDivs[--currentDivIdx].scrollIntoView({ behavior: 'auto' , block:'start', inline:'nearest', duration:500});
        isAnimating = true;
    }
})
