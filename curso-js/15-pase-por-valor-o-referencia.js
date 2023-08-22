/*Un argumento puede ser enviado como

Un valor es enviado como REFERENCIA cuadno ambos apuntan a la misma
direccion de memoria. Es decir un cambio, afecta a ambos.

Pasar argumento como VALOR es cuando se envia una copia de parametro original
(cualquier cambio no afecta al original).
*/

// VALOR ejemplo
let edad = 20;

function modificar(edad){
    edad = 25;
    console.log("Dentro de la funcion " + edad);
}

console.log(edad);
modificar(edad);
console.log(edad);

// REFERENCIA ejemplo
let edades = [20];// Es un objeto(array, funcion...)

function modificando(edades){
    edades[0] = 29; //apunta al mismo direccion de memoria
    console.log("Dentro de la funcion " + edades)
}

console.log(edades);
modificando(edades);
console.log(edades);