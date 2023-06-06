//-- lista-duas-dimensoes.js --//

//---- Desafio lista com duas dimensoes ----// 
// Crie uma lista com os seguintes alunos e alunas:
// 'João', 'Juliana', 'Caio', 'Ana'
// Crie uma lista com as seguintes medias 
// 10, 8, 7.5, 9
// Crie uma lista que contenha as duas listas acima 

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos,medias];
                                            //[0]=posicao da lista de alunos, [1]=posicao da juliana na lista de alunos.
console.log(`A aluna da posicao 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}, e a nota dessa aluna é: ${listaDeAlunosEMedias[1][1]}
     ` 
     );