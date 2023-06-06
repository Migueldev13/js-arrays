//*--* reprovados.js *--*/

// Desafio 15: filtrando por nota
// Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos:

// Ana: 7
// Marcos: 4.5
// Maria: 8
// Mauro: 7,5
// Temos duas listas, uma com o nome dos alunos e outra com a média de cada aluno.

//Usando o metodo filter

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {
  return medias[indice] < 7;
});

console.log(reprovados);