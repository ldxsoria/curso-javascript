/*
El Scope es el alcance que una variable tendrá en tu código

Scope local
    Puedes acceder a la variabe unicamente en cierta
    parte del codigo. Ejm: dentro de un bloque o funcion

Scope global
    Esta declarada fuera de una funcion o bloque.
    Permite acceder a la variable desde cualquier
    parte del codigo.    
*/

var nombre = "Diego";

decirHola();

console.log(nombre);

function decirHola(){
    var hello = "Hola";
    var nombre = "Luis";
    console.log(hello + " mundo" + " By " + nombre);
}

//La variable solo funciona dentro del bloque o funcion
// Si no uso let var, automaticamente es global (apellido="Campusmana")
// console.log(hello);