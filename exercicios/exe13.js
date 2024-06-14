//1

//const listaDeCachorro = [ "husky" ,"Bulldogue" ,"Labrador" ,"beagle" ,"Dálmata"]

//console.log(listaDeCachorro[2])

//2

const numeros = [1 , 2 , 3 , 4 , 5 , 6]

console.log("A array tem tamanho de" ,numeros.length ,"elementos")
console.log()

///////////////////////////////////////////////////
numeros.pop()
console.log("Tirando o ultimo número" , numeros)
console.log()

///////////////////////////////////////////////////
numeros.push(7)
console.log("Adicionando o número 7:" , numeros)
console.log()

///////////////////////////////////////////////////
console.log(`A array tem valor 6?`, numeros.includes(6))
console.log()

///////////////////////////////////////////////////
numeros.splice(3,2)
console.log("Removendo o 4 e 5 temos:" ,numeros)
console.log()

///////////////////////////////////////////////////
console.log("E agora a array tem tamanho de" ,numeros.length ,"elementos")