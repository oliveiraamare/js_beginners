/* Exercício 01 */
function checaIdade(idade) {  
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      idade >= 18 ? resolve() : reject();
    }, 2000);
  })
}

checaIdade(20)
  .then(function() {  
    console.log("Maior que 18");
  })
  .catch(function() {  
    console.log("Menor que 18");
  });
/*****************************************************************************************/
/* Exercício 02 */
var btn = document.getElementById('btn')
var inputText = document.getElementById('user');
var ul = document.querySelector('#app ul');

btn.onclick = function retornarUsuario() {
  var user = inputText.value;
  var uri = 'https://api.github.com/users/' + user + '/repos'

  loading();
 
  axios.get(uri)
  .then((response) => {
     console.log(response.data);
    listarRepositorios(response.data);
  })
  .catch((reject) => {
    ul.innerHTML = '';
    erro(reject);
  })
}
/* Inserindo informações do exercício 03 */
function loading() {  

  ul.innerHTML = '';

  var li = document.createElement('li');
  var loading = document.createTextNode("Carregando as informações");
  li.appendChild(loading);
  ul.appendChild(li);
}
/***************/

function listarRepositorios(respositorios) {

  ul.innerHTML = '';

  for (const repo of respositorios) {
    var li = document.createElement('li');
    var nome = document.createTextNode(repo.name)
    li.appendChild(nome);
    ul.appendChild(li);
  }
}

/* Inserindo informações do exercício 03 */
function erro(reject) {
  var p = document.createElement('p');
  var statusCode = document.createTextNode(
    ' Status code: ' + reject.response.status
    + " - " + reject.response.statusText
  );
  var response = document.createTextNode('. Usuário não encontrado, favor inserir um usuário válido!')
  p.appendChild(statusCode);
  p.appendChild(response);
  ul.appendChild(p);
}

/*****************************************************************************************/
/* Exercício 03 */

function loading() {  

  ul.innerHTML = '';

  var li = document.createElement('li');
  var loading = document.createTextNode("Carregando as informações");
  li.appendChild(loading);
  ul.appendChild(li);
}

function erro(reject) {
  var p = document.createElement('p');
  var statusCode = document.createTextNode(
    ' Status code: ' + reject.response.status
    + " - " + reject.response.statusText
  );
  var response = document.createTextNode('. Usuário não encontrado, favor inserir um usuário válido!')
  p.appendChild(statusCode);
  p.appendChild(response);
  ul.appendChild(p);
}