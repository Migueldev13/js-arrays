//** Media-for.js **//

// Desafio 10: Média
// Calcule a média entre as seguintes notas, usando o for:

// 10
// 6.5
// 8
// 7.5

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

    // nome dessa variavel é dentro do for é: *Variavel De Controle*
    //é normal ver a variavel indice ser declarada como i, como fazer isso? seleciona indice colocando o cursor encima do indice e aperta f2 e escreve a letra i.
for (let i = 0; i < notas.length; i++) { 
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);