const fechaHoy = new Date();
console.log(fechaHoy.toLocaleDateString('en-GB'));
const fechaNacimiento = new Date("09/17/1989");
const esMasTarde = fechaHoy > fechaNacimiento;
const diaNacimiento = fechaNacimiento.getDate();
const mesNacimiento = fechaNacimiento.getMonth() + 1;
const añoNacimiento = fechaNacimiento.getFullYear();