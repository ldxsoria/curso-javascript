/*
Debe ser posible retornarlo
Debe ser posible asignarlo a una variable
Debe ser posible enviarlo como argumento
*/

function executor(funcion){
    funcion();
}

function decirHola(){
    console.log("Hola");
}

//Cuando una funcion la envio como argumento
//no se coloca (), por que esto se usan para ejecutarla
//no para llamarla
executor(decirHola);

function sumaTodosAlt(){
    return Array.from(arguments).reduce((acc,argument) => argument + acc, 0);
}

console.log(sumaTodosAlt(1,2,3,4));

//Una funcion puede retornar otra
function build(){
    function a(){}
    return a;
}

function main(){
    return function() { console.log("Hola") };//Funcion anonima
}

let f = main();

f();