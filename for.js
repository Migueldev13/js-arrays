//----- for.js -----//

//** Desafio 9: For **//
//Imprima o índice e a lista com os seguintes números:
//100, 200, 300, 400, 500, 600

                //6 elementos dentro do array
const numeros = [100, 200, 300, 400, 500, 600]; 
//3 expressoes dentro do for
// Primeira expressão: é executada apenas uma única vez
// Segunda expressão: condição de execução
// Terceira expressão: é executada sempre ao final do bloco

                         //tamanho do array 6 elementos  *numero é o nome da const*
                         // < 6;, eu irei substituir por: numero.length                           
for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}