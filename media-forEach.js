//--** media-forEach.js **--//

// Desafio 12: Média com forEach
// Calcule a média entre as seguintes notas usando o forEach:

// 10
// 6.5
// 8
// 7.5

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
             //funcao anonima do js a funcao anonima é um call back: funcao call back é uma funcao que a gente passa como parametro de outra
notas.forEach(function (nota) {
  somaDasNotas += nota;
});

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);