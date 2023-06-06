// *--* Set.js *--* //

// Desafio 18: removendo duplicatas
// Um professor acidentalmente adicionou nomes repetidos na lista de chamada:

// Ana
// Clara
// Maria
// Maria
// João
// João
// João
// Remova os nomes repetidos, deixando apenas um de cada.


const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
                         // ... = spread operation
const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);

// doc   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set


//projeto final https://github.com/alura-cursos/js-arrays/tree/aula-5