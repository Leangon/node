const datosPersonales = ["Leandro", 32, true, new Date(1989, 08, 17), {
    titulo: "Cien años de soledad",
    autor: "Gabriel Garcia Marquez",
    fecha: new Date(1967, 2, 5),
    url: "https://es.wikipedia.org/wiki/Cien_a%C3%B1os_de_soledad"
}]
console.log(datosPersonales);

let persona = {
    nombre: "Leandro",
    apellido: "Gonzalez",
    edad: 32,
}



let prop = "edad"

console.log(persona[prop]);

// let resultado = 1 ;

// for( let i=1; i<11; i++){
// resultado *= i
// }

// console.log(resultado);

// let factorial = 1;
// let resultado = 1;

// while (factorial < 11){
//     resultado *= factorial;
//     factorial++
// }

// console.log(resultado);

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





