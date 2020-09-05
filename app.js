const argv = require('./config/yargs').argv
const colors = require('colors')


// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Genera un archivo con la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv
//const multiplicar = require('./...ubicacion')
const { creararchivo, listartabla } = require('./multiplicar/multiplicar');
const { defaultMaxListeners } = require('stream');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar', argv.base, argv.limite);
        listartabla(argv.base, argv.limite).catch(err => console.log(err))
        break
    case 'crear':
        console.log('crear', argv.base);
        creararchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ', `${archivo}`.red))
            .catch(err => console.log(err))
        break
    default:
        console.log('Comando no valido');

}

//multiplicar.creararchivo
//let base = 5;

//let argv2 = process.argv;
//let parametro = argv[2]
//let base = parametro.split('=')[1]

//console.log(argv.base, argv.limite);
//console.log(argv2);