// Task 5
document.querySelector('h1').setAttribute('style', 'background-color: #00B000')

let changeParagraphs = document.querySelector('#myDiv').querySelectorAll('p');

changeParagraphs[0].innerHTML = `<b>${changeParagraphs[0].innerHTML}</b>`;
changeParagraphs[1].setAttribute('style', 'color: #FF0000');
changeParagraphs[2].innerHTML = `<u>${changeParagraphs[2].innerHTML}</u>`;
changeParagraphs[3].innerHTML = `<i>${changeParagraphs[3].innerHTML}</i>`;

let changeList = document.querySelector('#myList').querySelectorAll('li');
let buffer = '';

for(let i = 0; i < changeList.length; i++) {
    buffer += changeList[i].innerHTML;
}

let replaceList = document.createElement('p');
replaceList.innerHTML = buffer;

document.body.replaceChild(replaceList, document.querySelector('#myList'));

document.getElementsByTagName('span')[0].style.visibility = 'hidden';