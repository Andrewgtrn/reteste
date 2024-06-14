//FUNÇÕES

function imprimirOlaMundo() {
    console.log("Olá mundo")
}

imprimirOlaMundo()

function calcularArea(altura,largura) {
    const area = altura * largura
    console.log(area)
}
calcularArea(5,6)
calcularArea(90,65)
calcularArea(2,78)

//ESCOPO

const num1 = 8

function func1( ){

const num2 = 5

function func2(){
console.log(num3)
const num3 = 1
}

}

//RETORNO

function calcularArea1(altura , largura) {
    const area = altura * largura
    return area
    //todo codigo dps do return é ignorado
}

const area = calcularArea1(2 , 3)
console.log(area)

//arrow functions

function calcularArea2(altura , largura){
    const area = altura * largura
    return area
}

let area25 = calcularArea2(6,2)
console.log(area25)


const area3 = (altura , largura) => altura * largura
console.log(area25(6 ,2))