/* Exercício 01 */
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
}

function retornaEndereco() {
  console.log(
    "O usuário mora em " + endereco.cidade
    + ' / ' + endereco.uf
    + ", no bairro " + endereco.bairro
    + ", na \"" + endereco.rua + "\""
    + " com nº " + endereco.numero
  );
}

retornaEndereco()

/* Ou então...
  const { rua, numero, bairro, cidade, uf } = endereco;
  console.log(
    `o usuário mora em ${cidade} / ${uf}, no bairro ${bairro}, na "${rua}" com nº ${numero}`
  )
*/

/*****************************************************************************************/
/* Exercício 02 */
function pares(num1, num2) {
  
  let numerosPares = []

  for (let index = num1; index <= num2; index++){
    index % 2 === 0 ? numerosPares.push(index) : null;
  }

  console.log("Os números pares entre " + num1  + " e " + num2 + " são: ")
  console.log("["  + numerosPares + "]")
}

pares(31, 321)

/*****************************************************************************************/
/* Exercício 03 */
function temHabilidades(skills) {
  if(skills.indexOf("JavaScript") > -1) {
    console.log(true)
  } else {
    console.log(false)
  }
}

var skills = ["JavaScript", "ReactJS", "React Native"];
temHabilidades(skills);

/*****************************************************************************************/
/* Exercício 04 */
function experiencia(anosEstudo){
  if(anosEstudo >= 0 && anosEstudo <= 1){
    console.log(`Você possui ${anosEsudos} e seu nível é: Iniciante`);
  } else if(anosEstudo > 1 && anosEstudo <= 3) {
    console.log(`Você possui ${anosEstudo} e seu nível é: Intermedário`);
  } else if(anosEstudo >= 3 && anosEstudo <= 6) {
    console.log(`Você possui ${anosEstudo} e seu nível é: Avançado`);
  } else {
    console.log(`Você possui ${anosEstudo} e seu nível é: Jedi Master`);
  }
}

var anosEstudo = 6;
experiencia(anosEstudo);

/*****************************************************************************************/
/* Exercício 05 */
var usuarios = [
  {
    nome: "Diego",
    habilidades: ["JavaScript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function habilidadesUsuarios() {
  for(usuario of usuarios){
    var habilidades = usuario.habilidades.join(', ');
    var usuario = `O ${usuario.nome} possui as habilidades: ${habilidades}`;
    console.log(usuario);
  }
}

habilidadesUsuarios();