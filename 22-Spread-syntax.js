/*
SPREAD SYNTAX (...)
Cualquiero objeto que puede ser separado en elementos
peude ser iterable
*/

let arreglo = [1,2,3];
let cadena = "Diego";

console.log(arreglo);
console.log(...arreglo); //individual
console.log(...cadena);

/*
REST PARAMETERS(...)
Unirlos
*/

function demo(...arr){
    console.log(arr);
};
demo(10,5,7);

function promedio(nombre,...calificaciones){
    console.log(nombre, calificaciones);
}

promedio("Diego",14,16,18,20)