//*--* media-geral.js *--*//

// Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:

// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

// const salaJava = [6, 5, 8, 9, 5, 6];

// const salaPython = [7, 3.5, 8, 9.5];

// Temos três salas representadas por listas e cada uma delas tem várias médias de alunos. Bora calcular a média geral de cada turma.

//usando o reduce, e o acumulador...

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) { 
                      //essa é uma logica praticamente pronta pra se somar os numeros de um array//
                                         //acumulador = acc que acumula a soma de todos esses numeros // 
  const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);

  const media = somaDasNotas / notasDaSala.length;

  return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

