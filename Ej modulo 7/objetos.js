const leandro = {
    nombre: "Leandro", 
    apellido: "González", 
    edad: 32, 
    altura: 1.76, 
    eresDesarrollador: true}

let edad = leandro.edad;

const amigos = [
    { ...leandro },
    {nombre: "Brenda", apellido: "Carrizo", edad: 34, altura: 1.60, eresDesarrollador: false},
    {nombre: "Lucas", apellido: "Scevola", edad: 28, altura: 1.71, eresDesarrollador: false}
]

const amigosOrdenados = amigos.sort((a,b)=> b.edad - a.edad);
console.log(amigos);