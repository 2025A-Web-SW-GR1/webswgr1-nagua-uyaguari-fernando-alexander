console.log("Hola, Typescript");
console.log("Hola Mundo desde TypeScript");

// ver nombre="algo" ; // no vamos a utilizar var
let nombres = "Adrian"; // string
nombres= "A";
nombres= 'A'; //ambos son de tipo String
//nombre = 1; // number --> esto no se puede hacer
let nombreTS:String = "Adrian"; // string
console.log(typeof nombres,"nombres");
let numeros= 1; // string
let numerosTS:number=1; // string
console.log(typeof numeros,"numeros");
numeros=1.1; //Decimales
console.log(typeof numeros,"numeros decimales ");

//BOOLEANOS
let booleanos= true; // booleano
let booleanosTS:boolean= true;
booleanos= false;
console.log(typeof booleanos,"booleanos");

//NULOS
let nulos= true; // booleano
let nulosTS:null= null;
nulos= false;
console.log(typeof nulos,"nulos");

//ARREGLOS
let arreglos=[];  
let arreglosTS:number[]= [];
arreglos= [];
console.log(typeof arreglos,"arreglos");

//ARREGLOS
let objetos={};  
let objetosTS:object= {};
objetos={};
console.log(typeof objetos,"obejetos");

// UNDIFINED
let undefineds = undefined;
let undefinedsTS: undefined = undefined;
console.log(typeof undefineds, "undefineds");

// Truty y Falsy
let trutyFalsy:any;
trutyFalsy = "";
if(trutyFalsy){ // ""
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = "a";
if(trutyFalsy){ // "a"
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = -1;
if(trutyFalsy){ // -1
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = 0;
if(trutyFalsy){ // 0
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = 1;
if(trutyFalsy){ // 1
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = null;
if(trutyFalsy){ // null
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = {};
if(trutyFalsy){ // {}
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = [];
if(trutyFalsy){ // []
    console.log("Truty");
}else{
    console.log("falsy");
}

// Objetos
const adrian:any = {
    "nombre" : "Fernando",
    "apellido" : "Nagua",
    edad : 36,
    hijos : 1,
    casado : true,
    zapatos : undefined,
    ropa : {
        color : "plomo", 
        talla : 40
    },
    mascotas : ['Cache', 'Kira']
};

console.log(adrian);
// Acceder a las propiedades
console.log(adrian.nombre);
console.log(adrian["apellido"]);
// Modificar (reasignar)
adrian.nombre = "Alexander";
// Crear atributos
adrian.sueldo = 0.0;

// Eliminar propiedades
adrian.nombre = undefined;
delete adrian.nombre;

// Variables por valor 
// Primitivos: number, string, boolean
let edadAdrian = 33;
let edadVicente = edadAdrian; // Clonación del primitivo
console.log(edadAdrian);
console.log(edadVicente);
edadAdrian= edadAdrian + 1;


// Varialbes por referencia
// Object: {} []
let notas = {
    total : 10
};
let notas2doBim = notas; // Referencia
notas2doBim.total = notas2doBim.total + 1;
console.log(notas);
console.log(notas2doBim);
// como clonar
let notasClonadasUno = Object.assign({}, notas);
let arregloACopiar = [1,2,3];
let arregloClonado = Object.assign([], arregloACopiar);

notasClonadasUno.total = notasClonadasUno.total + 1;
console.log(notas);
console.log(notas2doBim);
console.log(notasClonadasUno);

// Arreglos
const arregloEjemplo = [1,2,3,4,5];
// for of
for (let valorDelArreglo of arregloEjemplo) {
    console.log("Valor: ", valorDelArreglo);
}
// for in (obtenemos el indice)
for (let indiceArreglo in arregloEjemplo) {
    console.log('Indice: ', indiceArreglo);
    console.log('Valor: ', arregloEjemplo[indiceArreglo]);
}

// Añadir al FINAL un elemento
arregloEjemplo.push(6);
// Eliminar el último elemento
arregloEjemplo.pop();
// Agregar al principio del arreglo
arregloEjemplo.unshift(0);
// Eliminar y agregar elementos
// Splice       - Indicedonde empezar
//              - Numero elementos a eliminar
//              - Elemento a agregar


arregloEjemplo.splice(
    0,  // empezar indice 0
    3,  // eliminar 3 elementos
    3,4,5  
)


// Operadores trabajar con arreglos
// find
// findIndex
// map
// filter
// some
// every
// reduce

// Funciones 
function soloNumeros(a,b,c) {
    return a-b+c;
}

function soloNumreosTs(
    a:number,
    b: number,
    c: number
): number {
    return a-b+c;
}

function soloImprimir(texto:string):void{
    console.log(texto);
    
}

// Función nombrada
function nombreDeMiFuncion() {}
// Función anonima
const funcionSinNombre = function(){};
nombreDeMiFuncion();
funcionSinNombre();
[].forEach(function(){});
// Fat Arrow Function, se utilizan sobre funciones anonimas
const funcionFatArrow = (
    a:number, b:number
):number => a+b;
const functionFatArrow = () => {
    console.log('sin parametros');
}
const functionFatOmitirReturn = (a,b) => a+b;
const unSoloParametro = a => a*a;

// Parametros infinitos
function sumarNumeros (
    ...todosNumeros:number[]
): number{
    let total = 0;
    for (let valorNumero of todosNumeros) {
        total = total + valorNumero;
    }
    return total;
}

sumarNumeros(1,2,3,4,5,6,2,3,4,3,4,5,8);

// Destructuración: forma de clonación
const adrianDest = {
    nombre: "Fernando"
};
const carolinaDest = {
    nombre: "Caro",
    apellido: "Liaga"
};
// merge de las dos variables (orden importa)
const adrianCarolinaDest = {
    ...adrianDest,
    ...carolinaDest,
    nombre: "Vicente"
};

// Destructuración de arreglos
const arregloDestUno = [1,2,3,4,5];
const arregloDestDos = [6,7,8];
// merge
const arregloMerge = [
    ...arregloDestUno,
    ...arregloDestDos
];
