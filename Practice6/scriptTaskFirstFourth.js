// Task 1
let firstWay = document.getElementById('test');
let secondWay = document.body.firstElementChild;

firstWay.innerHTML = 'Last';
secondWay.innerHTML = 'Last';


// Task 2
let secondTask = document.getElementsByClassName('image')[0];

alert(secondTask.outerHTML);

secondTask.setAttribute('src', 'cat.jpg');

alert(secondTask.outerHTML);


// Task 3
let thirdTaskDiv = document.querySelector('#text');
let thirdTaskResult = thirdTaskDiv.querySelectorAll('p');

for(let i = 0; i < thirdTaskResult.length; i++) {
    console.log(`Selector text ${i}: ${thirdTaskResult[i].innerHTML}`);
}

// Task 4
let fourthTask = document.querySelector('#list');

//First way
let firstWayFourthTask = fourthTask.querySelectorAll('li');

alert(firstWayFourthTask[0].innerHTML);
alert(firstWayFourthTask[firstWayFourthTask.length - 1].innerHTML);
alert(firstWayFourthTask[1].innerHTML);
alert(firstWayFourthTask[3].innerHTML);
alert(firstWayFourthTask[2].innerHTML);

//Second way
alert(fourthTask.firstElementChild.innerHTML);
alert(fourthTask.lastElementChild.innerHTML);
alert(fourthTask.childNodes[3].innerHTML);
alert(fourthTask.childNodes[7].innerHTML);
alert(fourthTask.childNodes[5].innerHTML);
