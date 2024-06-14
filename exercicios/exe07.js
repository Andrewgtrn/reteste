const num = 5
const num2 = 3
const num3 = 5

//1
const condicao = (num === num2)&&(num > num3)
console.log(`O número ${num} é identico ao número ${num2} e o número ${num} é maior que ${num3}? ${condicao}`)
console.log("")

//2
const condicao2 = (num !== num2) || (num <= num3)
console.log(`O número ${num} é diferente do número ${num2} ou o número ${num} é menor igual do que ${num3}? ${condicao2}`)
console.log("")

//3
const condicao3 = (num3 > num2) && (num3 < num)
console.log(`O número ${num3} é maior que número ${num2} e o número ${num3} é menor que ${num}? ${condicao3}`)