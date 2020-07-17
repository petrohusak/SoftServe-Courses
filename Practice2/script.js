// Task 1
let x = 1;
let y = 2;

let res1 = String(x) + y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = !!x + String(y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = !!x; // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseInt(String(!!x) + y); // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"


// Task 2
let inputNumber = prompt('Enter the number:', '14');
if(inputNumber > 0 && inputNumber % 2 == 0 && inputNumber % 7 == 0){
    console.log('This number even, positive and multiple of seven');
} else if(inputNumber > 0 && inputNumber % 2 == 0 && inputNumber % 7 != 0){
    console.log('This number even, positive but not multiple of seven');
} else if(inputNumber > 0 && inputNumber % 2 != 0 && inputNumber % 7 == 0){
    console.log('This number not even, positive and multiple of seven');
} else if(inputNumber <= 0 && inputNumber % 2 == 0 && inputNumber % 7 == 0){
    console.log('This number even, not positive and multiple of seven');
} else if(isNaN(inputNumber)){
    console.log('It`s not a number.');
}


// Task 3
let myArray = [];
myArray[0] = 4;
myArray[1] = 'Some text.';
myArray[2] = true;
myArray[3] = null;
console.log('The number of elements of the array: ' + myArray.length);
myArray[4] = prompt('Enter any value:', 'sdf');
console.log('The fifth element of the array: ' + myArray[4]);
console.log('Old array: ' + myArray);
myArray.shift();
console.log('New array: ' + myArray);


// Task 4
let cities = ['Rome', 'Lviv', 'Warsaw'];
let resultString = cities.join('*');

// Task 5
let isAdult = +prompt('How are old you?', '25');
if(isAdult>18){
    console.log('You are an adult');
} else if(isAdult < 10 && isAdult > 0){
    console.log('You are still too young.');
} else if(isAdult < 0){
    console.log('Wrong number.');
} else if(isNaN(isAdult)){
    console.log('You must enter a number');
}


// Task 6
let sideA = parseFloat(prompt('Enter length A', '3'));
let sideB = parseFloat(prompt('Enter length B', '4'));
let sideC = parseFloat(prompt('Enter length C', '5'));
if(sideA < 0 || sideB < 0 || sideC < 0 || isNaN(sideA) || isNaN(sideB) || isNaN(sideC)){
    console.log('Incorrect data.');
} else{
    let halfPerimeter = (sideA + sideB + sideC) / 2;
    let square = (halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC)) ** (1/2);
    console.log('The area of the triangle: ' + square.toFixed(3));
    let isRectangular = false;
    if((sideC ** 2) == (sideA ** 2) + (sideB ** 2)){
        isRectangular = true;
    }
    if(isRectangular){
        console.log('The triangle is right-angled');
    } else{
        console.log('The triangle is not right-angled');
    }    
}

// Task 7
let time = new Date();
let currentHour = time.getHours();

console.log('Current hour: ' + currentHour);

if(currentHour >= 23 && currentHour < 5){
    console.log('Good night');
} else if(currentHour >= 5 && currentHour < 11){
    console.log('Good morning');
} else if(currentHour >= 11 && currentHour < 17){
    console.log('Good day');
} else if(currentHour >= 17 && currentHour < 23){
    console.log('Good evening');
}

switch(currentHour){
    case 23:
    case 24:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('Good night');
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log('Good morning');
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
        console.log('Good day');
        break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
        console.log('Good evening');
        break;
}