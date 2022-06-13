let listaCompra = ['Café', 'Leche', 'Fideos', 'Harina', 'Arroz'];
listaCompra.push('Aceite de girasol')
listaCompra.pop('Aceite de girasol');

const peliFavoritas = [
    {
        nombre: 'Operación Valkiria',
        director: 'Brian Synger',
        fecha: new Date("2008 12 25"),
    },
    {
        nombre: 'Bastardos sin gloria',
        director: 'Quentin Tarantino',
        fecha: new Date("2010 01 02"),
    },
    {
        nombre: 'Volver al futuro',
        director: 'Robert Zemeckis',
        fecha: new Date("05/02/1985"),
    }
]
const pelisNuevas = peliFavoritas.filter(element => element.fecha > new Date("2010 01 01"));

const directores = peliFavoritas.map(element => element.director);
const peliculas = peliFavoritas.map(element => element.nombre);
const directoresYtitulos = directores.concat(peliculas);
const direcYtitulos = [...directores, ...peliculas];
