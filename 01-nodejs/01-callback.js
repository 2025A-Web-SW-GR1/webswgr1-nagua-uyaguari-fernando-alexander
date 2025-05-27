// Estamos del lado del servidor
const fs = require('fs'); // Importamos la función para leer archivos
console.log("Primero");

fs.readFile(
    './a.txt',  // PATH
    'utf-8',    // CODIFICACIÓN
    (errorLectura, contenido) => {
        if (errorLectura) {
            console.log('Contenido error', errorLectura);
            console.error('ERROR lectura 1')
        } else {
            console.log('Tercero: ', contenido)

        }
    }
)

fs.writeFile(
    './a.txt',  // PATH
    'Hola, bola ' + new Date().toString(),  // CONTENIDO
    (errorEscritura) => { // Callbacks
        if (errorEscritura) {
            console.error('ERROR lectura ')
        } else {
                console.log('Contenido escrito con éxito')
        }    
    }
)

// Aveces se produce lo que se llama callback hell, que es un problema de diseño

console.log('Segundo');
