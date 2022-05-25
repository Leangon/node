let factorial = 1;
let resultado = 1;

while (true){
    resultado *= factorial;
    factorial++
    console.log(factorial);
    if(factorial == 11){
        break 
    }
}

console.log(resultado);