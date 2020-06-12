const fs = require('fs');

let listadoPorHacer = [];

//Funciones

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo guardar los datos', err);
        } else {
            console.log('Archivo guardado');
        }
    });
}


const cargarDb = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {

    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    //Guardar informacion en la bd
    guardarDB();

    return porHacer;
}

const getListado = () => {

    cargarDb();

    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDb();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

//Metodo mio

const borrar = (descripcion) => {

    cargarDb();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
       let eliminado = listadoPorHacer.splice(index, 1);
        guardarDB();
        return eliminado;
    } else {
        return false;
    }
}

//Metodo creado del curso

// const borrar = (descripcion) => {

//     cargarDB();

//     let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

//     if (listadoPorHacer.length === nuevoListado.length) {
//         return false;
//     } else {
//         listadoPorHacer = nuevoListado;
//         guardarDB();
//         return true;
//     }

// }

    module.exports = {
        crear,
        getListado,
        actualizar,
        borrar
    }





