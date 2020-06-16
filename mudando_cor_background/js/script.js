//Cor randômica
const button = document.querySelector('button');

const body = document.querySelector('body');
const cor = ['blue', 'green', 'purple', 'yellow', 'pink', 'black'];

body.style.background = 'violet';
button.addEventListener('click', changeBackground);

function changeBackground() {
  const cores = parseInt(Math.random() * cor.length);
  body.style.backgroundColor = cor[cores];
}