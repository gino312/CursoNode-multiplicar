const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('listar');

        console.log('======================'.green);
        console.log(`Tabla de ${argv.base}`.green);
        console.log('======================'.green);
        listarTabla(argv.base, argv.limite)
            .then(listado => console.log(`Listado: ${listado}`))
            .catch(err => console.log(err));
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;

}