// Task 6
let firstInput = prompt('Enter first value: ', 'a');
let secondInput = prompt('Enter second value: ', 'b');

let firstInputField = document.getElementById('input1');
let secondInputField = document.getElementById('input2');

firstInputField.value = firstInput;
secondInputField.value = secondInput;

let counter = 0;
function changeValue() {
    let buffer = firstInputField.value;
    
    firstInputField.value = secondInputField.value;
    secondInputField.value = buffer;
    counter++;
    
    if(counter == 19) {
        clearInterval(timerId);
    }
}

let timerId = setInterval(changeValue, 1000);
