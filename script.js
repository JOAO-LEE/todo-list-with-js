const addButton = document.querySelector('#criar-tarefa');
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
addButton.addEventListener('click', insertTasks)
// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza
const listItemsLocation = document.getElementById('lista-tarefas');
function changeBackgroundItems(event) {
  event.target.style.background = 'grey';
}
listItemsLocation.addEventListener('click', changeBackgroundItems)
// 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

// 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
function triscaAi(addClass){
    addClass.target.classList.toggle("completed")

}
listItemsLocation.addEventListener('dblclick', triscaAi)
// 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista
let items = document.querySelectorAll('.item')
const removeButton = document.querySelector('#apaga-tudo')
removeButton.addEventListener('click', liRemover)
function liRemover() {
    myList.innerHTML = '';
}
