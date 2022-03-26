const addButton = document.querySelector('#criar-tarefa');
const myList = document.querySelector('ol');
const writingBlock = document.querySelector('input');

// 6 - Ordene os itens da lista de tarefas por ordem de criação
function insertTasks() {
    let lines = document.createElement('li');
    lines.innerText = writingBlock.value;
    myList.appendChild(lines);
    writingBlock.value = '';
}
addButton.addEventListener('click', insertTasks)
// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza
// 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo
const listItemsLocation = document.getElementById('lista-tarefas');
function changeBackgroundItems(event) {
    const lines = listItemsLocation.children
    for (let x = 0; x < lines.length; x +=1){
        lines[x] = lines[x].style.backgroundColor = null; 
    }
  event.target.style.background = 'grey';
}
listItemsLocation.addEventListener('click', changeBackgroundItems)
// 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
function classAdder(addClass){
    addClass.target.classList.toggle("completed")

}
listItemsLocation.addEventListener('dblclick', classAdder)
// 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista
const removeButton = document.querySelector('#apaga-tudo')
removeButton.addEventListener('click', lineRemover)
function lineRemover() {
    myList.innerHTML = '';
}
