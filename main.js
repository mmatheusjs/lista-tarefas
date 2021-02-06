const elementoInput = document.querySelector('input');
const elementoBotao = document.querySelector('button');
const elementoLista = document.querySelector('ul');

const tarefas = [];

function mostraTarefas(){

    elementoLista.innerHTML = '';

    for (tarefa of tarefas) {
        const itemLista = document.createElement('li');
        itemLista.innerText = tarefa;
        itemLista.setAttribute('class', 'mdl-list__item');
        elementoLista.appendChild(itemLista);


        const itemDel = document.createElement('a');
        itemDel.setAttribute('class', 'material-icons');
        itemLista.appendChild(itemDel);

        const linkDel = document.createTextNode('delete');
        itemDel.appendChild(linkDel);
        
        

        const posicaoItem = tarefas.indexOf(tarefa);
        itemDel.setAttribute('onclick', `deletarTarefa(${posicaoItem})`);
    }
}

mostraTarefas();

function addTarefa(){
    const textoTarefa = elementoInput.value;
    tarefas.push(textoTarefa);
    mostraTarefas();
    elementoInput.value = '';
}

elementoBotao.setAttribute('onclick', 'addTarefa()');


function deletarTarefa(posicaoItem) {
    tarefas.splice(posicaoItem, 1);
    mostraTarefas();
}



