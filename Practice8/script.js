// Task 1
function upperCase(str) {
    if(/^[A-Z]/.exec(str)) {
        console.log(`String's starts with uppercase character`);
    } else {
        console.log(`String's not starts with uppercase character `);
    }
}

upperCase('regexp');
upperCase('RegExp');


// Task 2
console.log(` `);
function checkEmail(str) {
    if(/\w+@\w+\.\w+/.exec(str)){
        console.log(`It is Email`);
    } else {
        console.log(`It is not Email`);
    }
}

checkEmail(`Qmail2@gmail.com`);


// Task 3
console.log(` `);

let firstResult = `cdbBdbsbz`.match(/db+d/gi);
let secondResult = firstResult[0].match(/b+/gi);
let thirdResult = firstResult[0].match(/d$/gi);
let result = [firstResult[0], secondResult[0], thirdResult[0]];

console.log(result);


// Task 4
console.log(` `);
let fourthTask = `Java Script`.split(/ /);
let firstPartReplace = `Java Script`.replace(/.+ /gs, fourthTask[1] + ` `);
let replaceResult = firstPartReplace.replace(/ .+/gs, ` ` + fourthTask[0]);

console.log(replaceResult);


// Task 5
console.log(` `);

function cardValidation(number) {
    if(/^\d{4}-\d{4}-\d{4}-\d{4}/gi.test(number)) {
        console.log(`It is a card number`);
    } else {
        console.log(`It is not a card number`);
    }
}

cardValidation(`9999-g999-9999-9999`);


// Task 6
console.log(` `);

function emailValidation(inputEmail) {
    if(/^[^_-\W]\w+[-]?\w+?@\w+\.\w+/gi.test(inputEmail)) {
        console.log(`Email is correct!`);
    } else {
        console.log(`Email is not correct!`);
    }
}

emailValidation('as-d-234@sdfg.sfgd');


// Task 7
console.log(` `);

function loginValidation(inputLogin) {
    if(/^([a-z][a-z0-9\.]{1,9})$/gim.test(inputLogin)) {
        console.log(`Login correct`);
        console.log(`Numbers at login: ${inputLogin.match(/\d+(\.\d+)?/g)}`)
    } else {
        console.log(`Login incorrect`);
        console.log(`Numbers at login: ${inputLogin.match(/\d+(\.\d+)?/g)}`)
    }
}

loginValidation(`Fe1.1ret3`);
loginValidation(`ee1*1ret3`);