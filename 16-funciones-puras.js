let arreglo = [1,2,3]
arreglo[0] = 2; //Mutacion

let valor = 2;
valor += 1; //Mutacion

/*
Funcion pura: No produce efectos secundarios
Como mutacion o afectara valores fueras de la funcion

Se considera una buena practicar usar simpre
funciones puras.

*/

let edades = [20];

function modificar(edades){
    let copia = [...edades]; // Genero una copia
    copia[0] = 25; // Modifico la copia y no el valor original
    return copia // Para comunicar locambios con el exterior es preferible
}

console.log(edades);
modificar(edades);
console.log(edades);