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