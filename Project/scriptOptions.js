window.onresize = function() {    //causes the window to remain the same size
    window.resizeTo(485,535);
}

document.getElementsByTagName(`button`)[0].addEventListener(`click`, closeWindow);

function closeWindow() {
    window.close();
}