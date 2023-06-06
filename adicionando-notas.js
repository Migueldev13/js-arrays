// desafio adicionando-notas.js 

// O professor acidentalmente passou apenas 3 notas das 4 notas no sistema para um aluno 10, 6, 8.
//para corrigir, adicione a nota 7 e faça i calculo a media correta.


//** jeito correto de fazer é usando o PUSH para adicionar a nota desejada **//
const notas = [10,6,8];

notas.push(7);

console.log(notas);

const media = [notas[0]+notas[1]+notas[2]]/notas.length;

console.log(media);


// *** jeito mais simples de fazer no meu ponto de vista seria apenas adicionando a nota 7 entre os elemento *** //

// const notas = [10,6,7,8];
// const media = [notas[0]+notas[1]+notas[2]+notas[3]]/ notas.length;
// console.log(media);




