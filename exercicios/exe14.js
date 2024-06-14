let num = 0
const num2 = 9

while (num <= 10) {
console.log(`4X${num}= ${num2 * num}`);
    num = num + 1;
}

//2

const numeros = [11, 15, 18, 14, 12, 13]

let maiorNumero = 0

for(let i = 0; i < numeros.length; i++) {
let numeroAtual = numeros[i]

if(numeroAtual >= maiorNumero) {
    maiorNumero = numeroAtual
}
}
console.log(`O maior número do array é ${maiorNumero}`)

//3

const frase = ["oi" , "sumido" , "tudo" , "bem?" , "saudades"]
let resultado = ""
for (let palavra of frase) {
resultado = resultado + " " + palavra;
}
console.log(resultado)