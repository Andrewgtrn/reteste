//1
console.log()

const num1 = 180
const num2 = 10
const num3 = 10

const condicao = (num1 === num2) || (num1 === num3) || (num2 === num3)

if (condicao) {
  console.log(`1: Existem números identicos`)
} else {
  console.log(`1: Não existem números identicos`)
}
console.log()

//2

let idade = 17

if (idade >= 18) {
    console.log(`2: Eu sou maior de idade`)
} else {
    console.log(`2: Eu sou menor de idade`)
}
console.log()

//3

const numero = 10
const condicao2 = numero % 2

if (condicao2 !== 1) {
    console.log(`3: O número é par`)
} else {
    console.log(`3: O número é impar`)
}