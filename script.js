
const listElement = document.getElementById('list');
const inputElement = document.getElementById('tarefa');

const tasks = [];

function showTasks() {

    listElement.innerHTML = ''

    for (item of tasks) {

        const itemList = document.createElement('li');
        const itemText = document.createTextNode(item);
        const deleteElement = document.createElement('a')

        const pos = tasks.indexOf(item)

        deleteElement.innerHTML = '<img src="img/lixeira-de-reciclagem.png">'
        deleteElement.setAttribute('onclick', `removeTarefa(${pos})`)


        itemList.appendChild(itemText);
        itemList.appendChild(deleteElement)
        listElement.appendChild(itemList)
    }
}

showTasks()

function removeTarefa(pos) {
    tasks.splice(pos, 1)
    showTasks()
}

document.querySelector('button').addEventListener('click', function () {

    const tarefa = inputElement.value
    tasks.push(tarefa);
    inputElement.value = ''
    showTasks()
})