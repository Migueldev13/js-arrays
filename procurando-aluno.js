//-- procurando-aluno.js --// 

// Crie uma função que recebe como argumento o nome de um aluno.
// Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.

// 'João', 'Juliana', 'Caio', 'Ana'
// 10, 8, 7.5, 9

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
                                                       // *SINTAXE DE DESESTRUTURAÇÃO DE LISTAS* //
        const [alunos, medias] = listaDeAlunosEMedias; //nova sintaxe que equivale à://  const alunos = listaDeAlunosEMedias[0]
                                                                                     //  const medias = listaDeAlunosEMedias[1]

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana");