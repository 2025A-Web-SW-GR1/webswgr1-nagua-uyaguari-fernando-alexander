// EJERCICIO UTILIZANDO CALLBACKS

// Escribir un nuevo archivo JS que lea el archivo de ejemplo que tenemos, y concatenarle 
// al contenido actual del archivo + la fecha (toString) al final. 

const fs = require('fs'); // Importamos la función para leer archivos

fs.readFile(
    './a.txt',  // PATH
    'utf-8',    // CODIFICACIÓN
    (errorLectura, contenido) => {
        if (errorLectura) {
            console.error('ERROR lectura:', errorLectura);
        } else {
            console.log('Contenido leído inicial:', contenido);
            fs.writeFile(
                './a.txt',  // PATH
                contenido + " " + new Date().toString(),  // CONTENIDO
                (errorEscritura) => { 
                    if (errorEscritura) {
                        console.error('ERROR escritura', errorEscritura);
                    } else {
                        console.log('Contenido escrito con éxito');
                        fs.readFile(
                            './a.txt',  // PATH
                            'utf-8',    // CODIFICACIÓN
                            (errorLectura2, contenido2) => {
                                if (errorLectura2) {
                                    console.error('ERROR lectura:', errorLectura2);
                                } else {
                                    console.log('Contenido nuevo escrito:', contenido2);
                                }
                            }
                        );
                    }    
                }
            );
        }
    }
)


