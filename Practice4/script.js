// Task 1
function testThrow(exception) {
    try{
        throw exception;
    } catch(e){
        console.log('Caught: ' + e);
    }
}

testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened'));


// Task 2
function calcRectangleArea(width, height){
    if(isNaN(width) || isNaN(height)){
        throw new Error('You must enter two number!');
    } 
    
    return (1 / 2) * width * height;
}

try {
    let result = calcRectangleArea('d', 5);
    console.log(result);
} catch(e) {
    console.log(e.stack);
}

// Task 3
function checkAge(){
    let userAge = prompt('Enter your age.', '');

    userAge = userAge.trim();

    if (userAge == '') {
        throw new Error('The field is empty! Please enter your age');
    }

    if (isNaN(userAge)) {
        throw new Error('You must enter a number.');
    }

    if(userAge < 14) {
        throw new Error('You must be over 14 years old.');
    }

    return 'User over 14 years old.'
}

try {
    let result = checkAge();
    alert(result);
} catch(e) {
    alert( e.name + ': ' + e.message);
}

// Task 4
function MonthException(message) {
    this.name = 'MonthException';
    alert(this.name + ' Incorrect month number: ' + message);
}

function showMonthName(month) {
    switch(month) {
        case 1:
            return 'January';
        case 2: 
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10: 
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
            let newException = new MonthException(month);
            return false;
    }
}

let inputMonth = parseInt( prompt('Enter month number: ','') );
let resultFourthTask = showMonthName(inputMonth);

if(resultFourthTask != false) {
    alert(resultFourthTask);
}

// Task 5
function showUser(inputId) {
    let userId ={
        id: parseInt(inputId),
    }

    if(inputId < 0 || isNaN(inputId)) {
        throw new Error('ID must not be negative: ' + inputId);
    }
    return userId;
}

function showUsers(inputIds){
    let resultShowUsers = [];

    try {
        for(let i = 0; i < inputIds.length; i++) {
            resultShowUsers[i] = showUser(inputIds[i]);
        }
    } catch(e) {
        console.log(e.name + e.message);
    }

    return resultShowUsers;
}

try {
    let resultFifthTask1 = showUser(-1);
    
    console.log(resultFifthTask1);
} catch(e) {
    console.log(e.stack);
}

try {
    let resultFifthTask2 = showUsers([7, 44, 22]);
    //let resultFifthTask2 = showUsers([7, -12, 44, 22]);
    
    console.log(resultFifthTask2);
} catch(e) {
    console.log(e.stack);
}