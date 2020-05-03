const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    }).command('actualizar', 'Actualizar un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            demand: true,
            alias: 'd',
            desc: 'Mando como completado o pendiente la tarea'
        }
    }).help().argv;


module.exports = {
    argv
}