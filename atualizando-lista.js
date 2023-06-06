'atualizando-lista.js'

//Desafio: Atualizando elementos 
//Crie uma lista de chamada com os seguintes alunos:
//João, Ana, Caio, Lara, Marjorie, Léo... Porém, Ana e Caio mudaram de escola e Rodrigo entrou na Sala. Atualize a lista.

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Léo"];
//Agora precisamos tirar a Ana e o Caio e para fazer isso o Js tem um metodo chamado SPLICE, para usa-lo a gente chama o nome da variavel + splice = nomes.splice

//Se eu quero remover a Ana, dentro dos () tenho que colocar numero 1  pois é a posição que ela ocupa na lista, 
//O primeiro parametro eu preciso colocar a posição do item que quero remover, e no segundo parametro eu tenho que colocar a quantidade de itens que eu quero remover, que no caso aqui são dois itens (Ana e Caio) ou seja ficará nomes.splice(1,2); sendo o parametro 1 referindo-se a Ana e parametro 2 se referindo a quantidade de itens  à ser retirada.
//Neste caso para adicionar Rodrigo eu poderia usar o push que ficaria nomes.push(Rodrigo); e com isso o nosso desafio estaria concluido.   
nomes.splice(1,2); 
nomes.push("Rodrigo");
console.log(nomes);

//**--- Outro maneira de fazer ---**//
// o comando splice nos dá a opção de adicionar um terceiro parametro.

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Léo"];

// nomes.splice(1,2, "Rodrigo"); 

// console.log(nomes);