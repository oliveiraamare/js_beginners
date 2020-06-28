/* Exercício 01 */
var botaoUm = document.getElementById('btnQuadrado');
var divBotaoQuadrado = document.getElementById('quadrado');

botaoUm.onclick = function() {
  var botaoVermelho = document.createElement('div');

  botaoVermelho.style.width = '100px';
  botaoVermelho.style.height = '100px';
  botaoVermelho.style.backgroundColor = '#ED2939'

  /* Parte do exercício 02*/
  botaoVermelho.onmouseover = function() {
    botaoVermelho.style.backgroundColor = getRandomColor();
  }
  /***********************/

  divBotaoQuadrado.appendChild(botaoVermelho);  
}

/*****************************************************************************************/
/* Exercício 02 */
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
 }
 var newColor = getRandomColor(); // #E943F0

/* Inserir no click do botão 
  botaoVermelho.onmouseover = function() {
    botaoVermelho.style.backgroundColor = getRandomColor();
  } 
*/

/*****************************************************************************************/
/* Exercício 03 */
var divNomes = document.getElementById('exercicio3');
var ul = document.querySelector('div #nomes')

var nomes = ["Diego", "Gabriel", "Lucas"];

for(nome of nomes){
  adicionaListaNomes(nome);
}

function adicionaListaNomes(nome) {
  var id = document.createTextNode(nome);
  var li = document.createElement('li');
  li.appendChild(id);
  ul.appendChild(li);
}

/*****************************************************************************************/
/* Exercício 04 */
function adicionar(){
  var inputNome = document.getElementById('nome');
  var text = inputNome.value;
  adicionaListaNomes(text);
  inputNome.value = '';
}