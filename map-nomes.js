//*--* map-nomes.js *--*//

// Desafio 14: padronizando os nomes
// Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas.

// ana Julia
// Caio vinicius
// BIA silva

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);