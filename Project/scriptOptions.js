window.onresize = function() {
    window.resizeTo(485,535);
}

document.getElementsByTagName(`button`)[0].addEventListener(`click`, closeWindow);

function closeWindow() {
    window.close();
}