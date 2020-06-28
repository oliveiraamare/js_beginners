<h1 align="center">Desafios de JS do Rocketseat</h1>

<p align="center">
  Os desafios são exercícios propostos do Curso JavaScript disponibilizados em
  <a href="https://skylab.rocketseat.com.br/">Skylab</a>.
</p>

-----------------------------------------------------------------------------------------

<br>
<h3>Exercícios: Módulo 01 - Introdução JavaScript</h3>

<p> 
  :one: <em>Crie uma função que dado o objeto a seguir:</em>
</p>

`````
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};
`````

<p>Retorne o seguinte conteúdo:</p>

`````
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.
`````

<p> 
  :two: <em>Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:</em>
</p>

`````
function pares(x, y) {
  // código aqui
}

pares(32, 321);
`````

<p> 
  :three: <em>Escreva uma função que verifique se o vetor de habilidades passado possui 
  a habilidade "Javascript" e retorna um booleano true/false caso exista ou não.</em>
</p>

`````
function temHabilidade(skills) {
  // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
`````
<strong>Dica: para verificar se um vetor contém um valor, utilize o método indexOf.</strong>

<p> 
  :four: <em>Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:</em>
</p>

`````
function experiencia(anos) {
  // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
`````

<p> 
  :five: <em>Dado o seguinte vetor de objetos:</em>
</p>

`````
var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];
`````

Escreva uma função que produza o seguinte resultado:

`````
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
`````
<strong>
  Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e 
  para unir valores de um array com um separador utilize o join.
</strong>

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<br>
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

<br>
<h3>Exercício: Módulo 03 - App de Todos</h3>
<p>Criar uma lista de <strong>To do</strong> que poderá ser incluído ou excluido e será armazenado no storage local.</p>

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<br>
<h3>Exercícios: Módulo 04 - JS Assíncrono</h3>

<p> 
  :one: 
  <em>
    Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de <strong>2
    segundos</strong> retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 
    anos de idade o resultado deve cair no .then, caso contrário, no .catch
  </em>
</p>

`````
function checaIdade(idade) {
  // Retornar uma promise
}

checaIdade(20)
.then(function() {
  console.log("Maior que 18");
})
.catch(function() {
  console.log("Menor que 18");
`````

<p> 
  :two: 
  <em>
    Crie uma tela com um < input > que deve receber o nome de um usuário no Github. Após digitar o
    nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
    URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
    <br><strong>URL de exemplo: https://api.github.com/users/diego3g/repos</strong>
    <br>Basta alterar "diego3g" pelo nome do usuário.
  </em>
</p>

`````
<input type="text" name="user">
<button onclick="">Adicionar</button>
`````

<p>Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:</p>

`````
<ul>
  <li>repo1</li>
  <li>repo2</li>
  <li>repo3</li>
  <li>repo4</li>
  <li>repo5</li>
</ul>
`````

<p> 
  :three: 
  <em>A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no
    lugar da lista apenas enquanto a requisição estiver acontecendo:
  </em>
</p>

`````
<li>Carregando...</li>
`````
<p>
  Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
  <strong>Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.</strong>
</p>
<ul>
  
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------