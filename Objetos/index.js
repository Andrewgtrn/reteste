//Objetos

const professor = {
    nome:`Jean`,
    idade:28 ,
    tarefas:[`dar aulas` , `responder perguntas`],
}

const aluno = {
    nome: `Andrew Babinski`,
    idade:17,
    tarefas:[`estudar` , `falar as duvidas`],
    contarPiada:function(){
        console.log(`Bazinga!!`)
    },
    chamada:function(){
        console.log(`presente`)
    }

}
aluno.contarPiada
aluno.chamada
console.log(aluno.chamada)

console.log(`Olá meu nome é ${aluno.nome}, minha idade é ${aluno.idade}`)

//Objetos dentor de Objeto