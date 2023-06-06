//*--* callback.js *--*//

const nomes = ["Evaldo", "Mari", "Camis"];

//formas de usar callback

// nomes.forEach(function (nome) {
//  console.log(nome);
// });

// nomes.forEach((nome) => {
//  console.log(nome);
// });

function imprimeNome(nome) {
  console.log(nome);
}

nomes.forEach(imprimeNome);


//https://www.alura.com.br/artigos/estruturas-de-dados-introducao
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for