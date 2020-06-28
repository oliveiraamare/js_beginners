var inputToDo = document.querySelector('#app input');
var btn = document.querySelector('#app button')
var lista =  document.querySelector('#app ul');

var todos = JSON.parse(localStorage.getItem('lista_todos')) || [];

function render() {

  lista.innerHTML = '';

  for (const todo of todos) {
    var li = document.createElement('li');

    var link = document.createElement('a');
    var textoLink = document.createTextNode('Excluir');
    link.setAttribute('href', '#');
    link.appendChild(textoLink);

    var posicao = todos.indexOf(todo);
    link.setAttribute('onclick', 'deletar('+ posicao + ')');  

    li.append(todo);
    li.appendChild(link);
    lista.append(li);
  }
}

render();

function adicionar() {
  var todoText = inputToDo.value;
  todos.push(todoText);
  inputToDo.value = ' ';
  render();
  salvarNoStorage();
}

btn.onclick = adicionar;

function deletar(posicao) {
  todos.splice(posicao, 1);
  render();
  salvarNoStorage()
}

function salvarNoStorage() {
  
  localStorage.setItem('lista_todos', JSON.stringify(todos));
}