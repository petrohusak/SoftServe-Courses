// Task 4
document.getElementById('fourTaskButton').addEventListener('click', deleteOption);

function deleteOption() {
    document.getElementById('list').options[document.getElementById('list').options.selectedIndex] = null;
}

// Task 5
document.getElementById('fiveTaskButton').addEventListener('click', buttonClick);
document.getElementById('fiveTaskButton').addEventListener('mouseover', buttonMouseOver);
document.getElementById('fiveTaskButton').addEventListener('mouseout', buttonMouseOut);

function buttonClick() {
    let buffer = document.getElementById('fiveTaskDiv').innerHTML;

    document.getElementById('fiveTaskDiv').innerHTML = buffer + 'I was pressed!<br>';
}

function buttonMouseOver() {
    let buffer = document.getElementById('fiveTaskDiv').innerHTML;

    document.getElementById('fiveTaskDiv').innerHTML = buffer + 'Mouse on me!<br>';
}

function buttonMouseOut() {
    let buffer = document.getElementById('fiveTaskDiv').innerHTML;

    document.getElementById('fiveTaskDiv').innerHTML = buffer + 'Mouse is not on me!<br>';
}