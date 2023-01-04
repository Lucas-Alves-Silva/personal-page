var visibilidade = true; //Variável que vai manipular o botão Exibir/ocultar
var mostrar = document.querySelector(".menu");
var ocultar = document.querySelector(".menu");
var close = 'https://raw.githubusercontent.com/Lucas-Alves-Silva/personal-page/master/assets/close.png';

function display() { // Quando clicar no botão.

  if (visibilidade) {//Se a variável visibilidade for igual a true, então...
      mostrar.style.display = "block";//Mostramos a div..
      visibilidade = false;//alteramos o valor da variável para falso.
      burguer.src = close;
  } else {//ou se a variável estiver com o valor false..
      ocultar.style.display = "none";//Ocultamos a div..
      visibilidade = true;//Alteramos o valor da variável para true.
      burguer.src = './assets/menu.png';
  }
}