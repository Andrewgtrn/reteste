//1

function bomDia( nome) {
    return `Bom dia ${nome}`
}

const imprimirNome = bomDia("Andrew")

console.log(imprimirNome)

//2

function imprimeDados (nome , sobreNome , idade) {
    const frase =`O cliente ${nome}${sobreNome} tem ${idade} anos`
    return frase

}

const fraseDados = imprimeDados("kira" ,  " Yoshikage" , 33) 
 imprimeDados("Walter" , "White" , 46) 
 imprimeDados("Trumam" , "Burbank" , 37)

console.log(fraseDados)