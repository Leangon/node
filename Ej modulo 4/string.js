let nombre = "Leandro";
let lastName = "González";

let estudiante = `${nombre} ${lastName}`
console.log(estudiante);
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);
let numeroLetras = estudiante.length
console.log(numeroLetras);
let primerLetra = nombre.charAt(0);
console.log(primerLetra);
let ultimaLetra = lastName.charAt(lastName.length -1);
console.log(ultimaLetra);
let sinEspacios = estudiante.replace(/ /g, "");
console.log(sinEspacios);
let boolNombre = estudiante.includes("Leandro")
console.log(boolNombre);