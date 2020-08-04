// Task 3
document.getElementById('buttonFirstThirdTask').addEventListener('click', blueBackground);
document.getElementById('buttonSecondThirdTask').addEventListener('dblclick', pinkBackground);
document.getElementById('buttonThirdThirdTask').addEventListener('mousedown', brownBackground);
document.getElementsByTagName('a')[0].addEventListener('mouseover', yellowBackground);
document.getElementsByTagName('a')[0].addEventListener('mouseout', whiteBakcground);

function blueBackground() {
    document.body.style.backgroundColor = 'blue';
}

function pinkBackground() {
    document.body.style.backgroundColor = 'pink';
}

function brownBackground() {
    document.body.style.backgroundColor = 'brown';
}

function yellowBackground() {
    document.body.style.backgroundColor = 'yellow';
}

function whiteBakcground() {
    document.body.style.backgroundColor = 'white';
}

