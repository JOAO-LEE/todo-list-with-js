const myButton = document.querySelector('button');
const myList = document.querySelector('ol');
const writingBlock = document.querySelector('input');

function insertTasks() {
    let lines = document.createElement('li');
    lines.innerText = writingBlock.value;
    myList.appendChild(lines);
    writingBlock.value = '';
}
myButton.addEventListener('click', insertTasks)
