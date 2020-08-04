// Task 1
let newWindow = window.open('', '', 'width=300, height=300');

setTimeout(resizeWindow, 2000);
setTimeout(moveWindow, 4000);
setTimeout(closeWindow, 6000);

function resizeWindow() {
    newWindow.resizeTo(500, 500);
}

function moveWindow() {
    newWindow.moveTo(200, 200);
}

function closeWindow() {
    newWindow.close();
}


// Task 2
document.getElementById('buttonSecondTask').addEventListener('click', changeCSS);

function changeCSS(){
    let textSecondTask = document.getElementById('text');

    textSecondTask.style.color = 'orange';
    textSecondTask.style.fontSize = '20px';
    textSecondTask.style.fontFamily = 'Comic Sans MS';
}

