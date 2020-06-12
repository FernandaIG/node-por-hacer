// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':

        console.log('Crear por hacer'.magenta);

        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

        break;
    case 'listar':

        console.log('Mostrar todas las tareas por hacer'.magenta);

        let listado = porHacer.getListado();

        for (const tarea of listado) {
            console.log('=======Por Hacer======='.rainbow);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('======================='.rainbow);
        }

        break;

    case 'actualizar':

        console.log('Actualizar una tarea por hacer'.rainbow);
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('status de la tarea: ', actualizado);

        break;

    case 'borrar':

        console.log('Borrar una tarea'.rainbow);

        let borrado = porHacer.borrar(argv.descripcion);
        console.log('Tarea eliminada', borrado);

        break;

    default:
        console.log('Comando no es reconocido');
        break;
}

