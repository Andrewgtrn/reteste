//while imprimindo alguns números

let i = 0   //começo

while (i<10) {  //condição

console.log(i)  //repetição

i++  //incremento

}
//0<100=false   101<100=true
let voltas = 0

while (voltas < 10) {
console.log(`pedale, pois você só deu ${voltas}voltas`);
    voltas++
}

//For

for(let i = 0; i<10; i++) {
    console.log(i)
}
///////////////////////////////////////////
const numeros = [14, 57, 89, 15,23] 

for(let i = 0; i<5; i++) {
     const elemento = numeros[1]
    console.log(elemento)
}

//i ++ incrementa em 1

//i = i + numero incrementa i somendo algum numero
//exemplo: i = i + 5

//i+= numero forma simplificada
//exemplo: i += 2

//for of

const numero = [14, 15, 67, 33]

for (let numero of numeros)
console.log(numero)