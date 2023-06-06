//---------- Desafio Juntando as Salas ---------//

// Haverá uma palestra sobre padrōes de projetos para as alunas das salas de JavaScript e Python.
//Junte ambas as salas em uma unica lista que exiba todas as alunas.

const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "léo", "Raquel"];

// e pra juntar uma lista na outra eu preciso pegar uma das listas e usar o comando concat. Eu vou usar a primeira variavel ou seja: salaJS.concat() e dentro do () eu vou colocar a outra lista que ficará: salaJS.concat(salaPython); daí eu sei que o concat nao irá alterar nenhum dos dois arrays, ele retornará um novo... então eu crio uma variavel, nomeio ela e ficará assim: const salasUnificadas = salaJS.concat(salaPython);

//salaJS.concat(salaPython); (ficará assim e eu eu criarei a proxima const)
const salasUnificadas = salaJS.concat(salaPython);


console.log(salasUnificadas)