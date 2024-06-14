//While

let voltas = 0

while (voltas < 10) {
//console.log(`pedale, pois você só deu ${voltas}voltas`);
    voltas++
}

//for

for (let volta = 0; volta <10 ; voltas++) {
//console.log(`pedale, pois você só deu ${volta}voltas`)
}

//For pode ser usado para percorrer arrays e fazer algo
//const numeros = [1, 4 , 79 , 0 , 43]
//
for (let i = 0; i < numeros.length ; i++) {
    //console.log(numeros[i])
}
//

//for off
//para cada número do meu array de número, imprima o valor do número
const num = [10 , 56, 80, 94]

for(numero of num) {
    console.log(numero)
}