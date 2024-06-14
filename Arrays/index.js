//ARRAYS

const listaDeCompras = ["batata" , "cenoura" , "tomate"]

const listaDaLoteria = [2 , 4 , 5 , 6 , 7]

const listaBolleans = [true , false , true]

const listaVariada = [5 , "cinco" , false]

listaDeCompras[2]
console.log(listaVariada[0] + 1)

//length

console.log(listaDeCompras.length)

//Includes

const seriesBoas = ["breaking bad" , "The last of us"]

seriesBoas.includes["breaking bad"] //true
seriesBoas.includes["Gamers"] //false

console.log(seriesBoas.includes(0))

//Push

const numeros = [1 , 2 , 3]

numeros.push(4)
console.log(numeros)

numeros.push(5, 6 ,7)
console.log(numeros)

//pop

const meusPeixes = ["atum" ,"carpa" ,"godzilla"]

meusPeixes.pop()

console.log(meusPeixes)

//splice

const letras = ["A" , "B", "C", "D" ,"E" ,"F" ,"G" ,"h"]
//indices (1)    0     1    2    3    4    5    6    7

letras.splice(2,1)

console.log(letras)

letras.splice(3,2)

console.log(letras)

listaDaLoteria.splice(1,2)

console.log(listaDaLoteria)