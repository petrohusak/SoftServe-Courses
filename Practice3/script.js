// Task 1
let arrayFirstTask = [2, 3, 4, 5];
let resultFirstTask = 1;
for(let i = 0; i < arrayFirstTask.length; i++){
    resultFirstTask *= arrayFirstTask[i];
}
console.log('The product of the elements of the array: ' + resultFirstTask);

resultFirstTask = 1;
let i=0;
while(i<arrayFirstTask.length){
    resultFirstTask *= arrayFirstTask[i];
    i++;
}
console.log('The product of the elements of the array: ' + resultFirstTask);


// Task 2
for(let i = 0; i < 15; i++){
    if((i % 2) == 0){
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}


// Task 3
function randArray(n){
    let arrayThirdTask = []
    for(let i = 0; i < n; i++){
        arrayThirdTask[i] = Math.round((Math.random() * 499) + 1);
    }
    return arrayThirdTask;
}

let thirdTaskInputValue = prompt('Enter a number: ', '3');
let arrayResultThirdTask = randArray(parseInt(thirdTaskInputValue));
console.log('Third task result: ' + arrayResultThirdTask);


// Task 4
function raiseToDegree(a, b){
    return a ** b;
}

let a = prompt('Enter number A: ', '2');
let b = prompt('Enter number B: ', '3');
if(isNaN(parseInt(a)) || isNaN(parseInt(b))){
    console.log('Incorect value!');
} else {
    let resultFourthTask = raiseToDegree(a, b);
    console.log('Task fourth result: ' + resultFourthTask);
}


//Task 5
function findMin(){
    let min = arguments[0];
    if(arguments.length == 0 || arguments.length == 1){
        console.log('You must enter at least two values.')
        return;
    }else{
        for(let i = 1; i<arguments.length; i++){
            if(arguments[i] < min){
                min = arguments[i];
            }
        }
    }
    return min;
}
let resultFifthTask = findMin(12, 14, 4, -4, 0.2);
if(resultFifthTask === undefined){
    console.log('Fifth task error!');
}else{
    console.log('Task fifth result: ' + resultFifthTask);
}


// Task 6
function findUnique(arraySixthTask){
    for(let i = 0; i < (arraySixthTask.length - 1); i++){
        for(let j = (i + 1); j < arraySixthTask.length; j++){
            if(arraySixthTask[i] === arraySixthTask[j]){
                return false;
            }
        }
    }
    return true;
}
let resultSixthTask =  findUnique([1, 2, 3, 5, 3]);
if(resultSixthTask == true){
    console.log('Task six1. Array unique.');
}  else {
    console.log('Task six1. Array not unique.');
}

resultSixthTask = findUnique([1, 2, 3, 5, 11]); 
if(resultSixthTask == true){
    console.log('Task six2. Array unique.');
}  else {
    console.log('Task six2. Array not unique.');
}


// Task 7
function lastElem(arraySevenTask, parametrSevenTask){
    if(arguments[1] === undefined){
        return arraySevenTask.pop();
    } else {
        let resultSevenTask = arraySevenTask.slice((arraySevenTask.length - parametrSevenTask));
        return resultSevenTask;
    }
}

console.log('Seven task result:');
console.log(lastElem([3, 4, 10, -5]));      
console.log(lastElem([3, 4, 10, -5], 2));   
console.log(lastElem([3, 4, 10, -5], 8));   


// Task 8
function eighthTaskFunction(inputString){
    let eighthTaskInputString = String(inputString);
    
    if(eighthTaskInputString[0] != ' '){
        eighthTaskInputString =  eighthTaskInputString[0].toUpperCase() + eighthTaskInputString.slice(1);
    }
    
    for(let i = 1; i < eighthTaskInputString.length; i++){
        if(eighthTaskInputString[i - 1] == ' '){
            eighthTaskInputString = eighthTaskInputString.slice(0, i) + eighthTaskInputString[i].toUpperCase() + eighthTaskInputString.slice(i + 1);
        }
    }
    return eighthTaskInputString;
}

let eighthTaskResultString = eighthTaskFunction('i love java script');
console.log('Eighth task result:  ' + eighthTaskResultString);