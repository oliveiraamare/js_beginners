<h3>Exercícios: Módulo 02 - Manipulando a DOM</h3>

<p> 
  :one: 
  <em>
    Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
    vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
    aparecer na tela.
  </em>
</p>

<p> 
  :two: 
  <em>
     Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de 
    algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:
  </em>
</p>

`````
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
  return color;
}
var newColor = getRandomColor(); // #E943F0
`````

<p> 
  :three: <em>A partir do seguinte vetor:</em>
</p>

`````
var nomes = ["Diego", "Gabriel", "Lucas"];
`````
<p>Preencha uma lista (< ul >) no HTML com os itens da seguinte forma:</p>
<ul>
  <li>Diego</li>
  <li>Gabriel</li>
  <li>Lucas</li>
</ul>

<p> 
  :four: <em>Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:</em>
</p>

`````
<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>
`````

<p> 
  Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
  nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
  demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.
</p>

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------