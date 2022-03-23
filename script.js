const myButton = document.querySelector('#criar-tarefa');
const myList = document.querySelector('ol');
const writingBlock = document.querySelector('input');
// 6 - Ordene os itens da lista de tarefas por ordem de criação
function insertTasks() {
    let lines = document.createElement('li');
    lines.innerText = writingBlock.value;
    lines.className = "item"
    myList.appendChild(lines);
    writingBlock.value = '';
}
myButton.addEventListener('click', insertTasks)
let listItems = document.querySelectorAll('.item')
// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza
const listItemLocation = document.getElementById('lista-tarefas');
function changeBackground(event) {
  event.target.style.background = 'grey';
}
listItemLocation.addEventListener('click', changeBackground)
