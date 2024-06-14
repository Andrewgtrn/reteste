const filme = {
    nome: `Django livre`,
    lancamento: `18/01/2013`,
    elenco:[`Leonardo Dicaprio` , `Don Johnson` , `Jamie Foxx`],
    personagens:[`Calvin Candie` , `Big daddy` , `Django`],
    filmeVisto:true
}

//for(let i = 0; i * 3 ; i++) {
//console.log(filme.elenco[i], filme.personagens[i])
//}

//filme.elenco[0] = `xuxa`

//console.log(`O nome do filme é ${filme.nome}`)
//console.log(`A data de lançamento é ${filme.lancamento}`)
//console.log(`elenco do filme: ${filme[`elenco`]}`)
//console.log(`Ja assisti o filme? ${filme[`filmeVisto`]}`)

console.log()

let pessoa = {
    nome: `Arthur Kist`,
    idade:17 ,
    generoMusical: [`eletronica e Hip-hop`]
}

//console.log(`O nome da pessoa é ${pessoa.nome} ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}`)

///////////////////////

function novaInformacao(pessoa) {
    let novoHumano = {
    ...pessoa,
    comidasFav:[`Hamburguer` , `pizza` , `ovo`],
    melhorAmigo:{
        nome: `vitor`,
        idade:24
    }
}
console.log(`${novoHumano.comidasFav}`)
}

