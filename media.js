//** Arrays = estrutura de dados ou lista **//

// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5;

// const media = (nota1 + nota2 + nota3 + nota4) / 4;

// console.log(media);

//** arrays exemplo **//

//posicoes / indeices 
//             0    1   2   3 
const notas = [10, 6.5, 8, 7.5]; //<= esses numeros sao chamados de elementos/numeros/ ou valores  

                                                            // ao inves de dividir por 4, podemos usar o notas.length, (notas que é o nome da variavel), assim nao precisamos contar o numero de elementos.
const media = (notas [0] + notas [1] + notas [2] + notas [3]) / notas.length;

console.log(media);

//*********** criando um array ***********//
//const/let/var nome da variavel = [valor/numero/elemento] essa é a base de uma array.
