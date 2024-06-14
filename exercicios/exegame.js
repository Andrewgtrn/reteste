const valores = [`pedra` , `papel` , `tesoura`]

console.log("vamos jogar: \n[0] pedra , \n[1] tesoura , \n[2]")

let jogador = Number(prompt(`faça sua escolha`));
jogador = valores[jogador]

let bot = Meth.floor(Math.random()*3)
bot = valores[bot]

console.log("você ecolheu "+jogador+"\nseu adversario escolheu" + bot)

if(jogador===bot){
    console.log("empate")
} else if 