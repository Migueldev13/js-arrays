'dividindo-sala.js'
// ************************ Desafio Sala Dividida ************************** //
// Divida os alunos da sala abaixo em duas listas com a mesma quantidade de alunos: 

// Alunos // 

const alunos =  [
'João',
'Juliana',
'Ana',
'Caio',
'Lara',
'Marjorie',
'Guilherme',
'Aline',
'Fabiana',
'André',
'Carlos',
'Paulo',
'Bia',
'Vivian',
'Isabela',
'Vinicíus',
'Renan',
'Renata',
'Daisy',
'Camilo'
 ]; 
 //Eu quero pegar os 10 priemeiros alunos para colocar em uma sala, pois temos o total de 20 alunos.  
 // No JavaScript existe um metodo que pode me ajudar: que é nomeDaVariavel.slice ou seja neste caso aqui alunos.slice(alunos é o nome da minha variavel) executando metodo * slice * abrindo e fechando os (), e eu vou chamar dentro dos () onde eu quero que comece e termine. o primeiro parametro que eu vou passar é a posicao onde eu quero que ele comece a fatiar/dividir, que neste caso eu vou começar com João que está na posição 0, entao eu vou escrever la no () do slice '0,' e o segundo parametro é onde eu vou terminar. Eu vou colocar o numero 10, mas por quê a posicao 10, se a contagem do arrays começa com o 0? Porque o 10 se refere ao indice do aluno 11. só que uma peculiaridade do Slice, que temos que esta atentos é que o segundo parametro a gente coloca o indice e ele nao sera incluido  no array novo que a gente quer fazer. Então quando eu coloco o parametro 0,10 na verdade eu estou dizendo que quero os alunos de 0 à 9.     

 const sala1 = alunos.slice(0,10);
 const sala2 = alunos.slice(10); // eu poderia chamar a posicao 20 da tabela depois da posicao 10, pra ir do 10 ao 19, mas nao é necessario, pois quando a gente nao coloca o segundo parametro no slice ele ja entende que a gente quer pegar da posicao 10 ate o final do array, entao só isso ja é o suficiente. 

 console.log(sala1);
 console.log(sala2);



 //**----------** Outra forma de fazer isso **----------**//

//  const alunos =  [
//     'João',
//     'Juliana',
//     'Ana',
//     'Caio',
//     'Lara',
//     'Marjorie',
//     'Guilherme',
//     'Aline',
//     'Fabiana',
//     'André',
//     'Carlos',
//     'Paulo',
//     'Bia',
//     'Vivian',
//     'Isabela',
//     'Vinicíus',
//     'Renan',
//     'Renata',
//     'Daisy',
//     'Camilo'
//      ];

//      const sala1 = alunos.slice(0,alunos.length/2);
//      const sala2 = alunos.slice(alunos.length/2); 

//      console.log(sala1);
//      console.log(sala2);