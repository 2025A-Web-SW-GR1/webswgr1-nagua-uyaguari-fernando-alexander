const fs = require('fs')

function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise (
        (resolve, reject) => {
            if (numero % 2 === 0) {
                resolve(numero); // Return
            } else {
                reject("No es par"); // Throw
            }
        }
    )
    return miPrimerPromesa;
}

function promesaElevadaCuadrado(numero) {
    return Promise.resolve(numero*numero);
}

promesaEsPar(4)
    .then(
        (respuestaEsPar) => {
            console.log('Es par', respuestaEsPar);
            return promesaElevadaCuadrado(respuestaEsPar);
        }
    )
    .then(
        (respuestaElevarCuadrado) => {
            console.log('Elevado: ', respuestaElevarCuadrado);
        }
    )
    .catch(
        (respuestaError) => {
            console.log('No es par', respuestaError);
        }
    )

function leerArchivoPromesa(nombreArchivo) {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo, // Path
                'utf-8', // Codificación
                (errorLecture, contenidoj) => {
                    if (errorLecture) {
                        reject(errorLecture);
                    } else {
                        res(contenido);
                    }
                }
            )
        }
    )
} 

leerArchivoPromesa('./a.txt')
    .then(
        (contenidoArchivo) => {
            console.log('Contenido:', contenidoArchivo);
        }
    )
    .catch(
        (error) => {
            console.error('Error:', error)
        }
    )


// REGLAS: 
// 1. Estamos dentro de una función nombrada, anonima o fat arrow
// 2. Agregar la palabra reservada 'async' antes de la función
// 3. Agregar 'AWAIT' dentro de un bloque TRY CATCH antes de la promesa
async function correrLogicaPromesas() {
    try {
        const respuestaLeerArchivo = await leerArchivoPromesa('./a.txt');
        console.log('1. Respuesta archivo', respuestaLeerArchivo);
        const respuestaLeerArchivo2 = await leerArchivoPromesa('./a.txt');
        console.log('2. Respuesta archivo', respuestaLeerArchivo2);
        await leerArchivoPromesa('./a123.txt')
    } catch (error) {
        console.log('3. Error archivo', error);
        
    }
}

correrLogicaPromesas().then().catch(); // async await transforma a la funcion en una PROMESA