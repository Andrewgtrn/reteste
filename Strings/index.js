//crase ``

const nome = "andrew"
const idade = 17
const frase = `olá meu nome é ${nome} tenho e tenho ${idade} anos `

console.log(frase)

//prototipos de strings

//propriedades

console.log(nome.length)

const propriedade = nome.length


//metodos

console.log(nome.toLocaleUpperCase)

const metodo = nome.toLocaleUpperCase() //metodo precisa de parenteses

//lenght

console.log(nome.length)

console.log(`A variavel nome tem ${nome.length} caracteres`) //6 por causa do nome Andrew

//tolowercase

console.log(nome.toLowerCase()) //ira fazer todas as letras da strings em minusculas

//touppercase

console.log(nome.toUpperCase())

//trim

let email = "   senac@senac.com   "  //tira o espaço das strings
email = email.trim()

console.log(email.length)
console.log(email.trim())

//includes

const palavra = "hoje eu comi batata"

console.log(palavra.includes("batata"))
console.log(palavra.includes("banana"))

const palavra2 = "banana"

console.log(`na frase a palavra ${palavra2} foi encontrada? ${frase.includes(palavra2)}`)

//replaceall

const frase2 = "hoje eu comi cenoura, adoro cenoura"
const novoTexto = frase2.replaceAll("cenoura" , "batata")
console.log(novoTexto)
