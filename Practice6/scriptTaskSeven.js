// Task 7
let newMain = document.createElement('main');
newMain.className = 'mainClass check item';

document.body.prepend(newMain);

let newDiv = document.createElement('div');
newDiv.id = 'myDiv';

document.body.firstChild.prepend(newDiv);

let newParagraph = document.createElement('p');
newParagraph.innerHTML = 'First paragraph';

document.getElementById('myDiv').append(newParagraph);

