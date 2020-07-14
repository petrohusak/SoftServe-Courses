// Task 2
console.log('Husak');


// Task 3
let varA=1;
let varB=2;
console.log('A= ' + varA);
console.log('B= ' + varB);
varA = varB;
console.log('A= ' + varA);
console.log('B= ' + varB);


// Task 4
let myObject = {
    String: 'Petro Husak',
    Number: 5,
    Boolean: true,
    Undefined: void 0,
    Null: null     
};

// Task 5
console.log(' ');
let isAdult = confirm('Are you adult?');
if(isAdult) alert('Adult user!');
else alert('The user is not an adult!');

// Task 6
let name;
let surname;
let group;
let yearOfBirth;

name = 'Petro';
surname = 'Husak';
group = 'Lv-522.LS Core';
yearOfBirth = 1998;

let maritalStatus;
maritalStatus = false;

console.log(' ');
console.log('"name" type - ' + typeof(name));
console.log('"surname" type - ' + typeof(surname));
console.log('"group" type - ' + typeof(group));
console.log('"yearOfBirth" type - ' + typeof(yearOfBirth));
console.log('"maritalStatus" type - ' + typeof(maritalStatus));

console.log('Sort by data type:');
console.log('Number:')
console.log('-' + yearOfBirth);
console.log('Boolean:');
console.log('-' + maritalStatus);
console.log('String:');
console.log('-' + name);
console.log('-' + surname);
console.log('-' + group);

let taskSixUndefined;
let taskSixNull = null;
console.log(' ');
console.log('Type of Null and Undefined variables:');
console.log(typeof taskSixNull);
console.log(typeof taskSixUndefined);


// Task 7
let login = prompt('Please enter login', 'Petro');
let email = prompt('PLease enter Email', '1234@gmail.com');
let password = prompt('Please enter the password', '1234');
alert('Dear ' + login + ', your email is: ' + email + ', your password is: ' + password);


// Task 8
console.log(' ');
let secondsPerHour = 60 * 60;
console.log('Seconds per hour: ' + secondsPerHour);
let secondsPerDay = secondsPerHour * 24;
console.log('Seconds per day: ' + secondsPerDay);
let secondsPerMonth = secondsPerDay * 30;
console.log('Seconds per month: ' + secondsPerMonth);