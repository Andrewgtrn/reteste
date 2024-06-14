let segundos = 10

while(segundos>=0){
if(segundos === 0){
   console.log("boom")
}else if(segundos % 2 === 0){
    console.log("tic")
}else{
    console.log("tac")
}
segundos -- //incremento
}

//2

for(let segundos = 10 ; segundos >= 0 ; segundos--) {
  if(segundos === 0) {
        console.log("booom")
 }
    else if(segundos % 2 === 0) {
       console.log("tic")
    } else {
        console.log("tac")
    }
}


const readline = requira(`readline-sync`);
const maiorNumero = readlineSync.question(`Insira um número`);


for (let i = maiorNumero ; i >= 0 ; i-- ) {
console.log(i)
}