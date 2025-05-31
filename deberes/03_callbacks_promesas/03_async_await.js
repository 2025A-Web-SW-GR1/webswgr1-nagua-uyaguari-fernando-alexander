// EJERCICIO UTILIZANDO PROMESAS (ASYNC AWAIT)

// Escribir un nuevo archivo JS que lea el archivo de ejemplo que tenemos, y concatenarle 
// al contenido actual del archivo + la fecha (toString) al final. 

const fs = require('fs');

function leerArchivo(nombreArchivo) {
    return new Promise((res, rej) => {
        fs.readFile(
            nombreArchivo,
            'utf-8',
            (error, contenido) => {
                if (error) {
                    rej('ERROR lectura:', error);
                } else {
                    res(contenido);
                }
            }
        );
    })
}

function escribirArchivo(nombreArchivo, contenido) {
    return new Promise((res, rej) => {
        fs.writeFile(
            nombreArchivo,
            contenido + " " + new Date().toString(),
            error => {
                if (error) {
                    rej('ERROR escritura:', error);
                } else {
                    res('Contenido escrito con éxito');
                }
            }
        );
    })
};

const nombreArchivo = './a.txt'

async function ejecutarPromesas() {
    try {
        const resultadoLeer1 = await leerArchivo(nombreArchivo);
        console.log('Contenido leído inicial:', resultadoLeer1);

        const resultadoEscribir = await escribirArchivo(nombreArchivo, resultadoLeer1);
        console.log(resultadoEscribir);
        
        const resultadoLeer2 = await leerArchivo(nombreArchivo);
        console.log('Contenido nuevo escrito:', resultadoLeer2);
    } catch (error) {
        console.log(error);
    }
}

ejecutarPromesas();