/*
Parametros
    No tiene un tipo definido
    No tienne un limite (mira el ejemplo)
Argumentos

*/

function cuadrado(numero){ //numero <- parametro
    let result = numero * numero;
    console.log(result);
}

function hola(nombre="Alumno"){
    console.log("Hola " + nombre)
}

function sumarTodos(numero){
    let suma = 0
    for(let i = 0; i < arguments.length; i++){ suma += arguments[i]};
    console.log(suma);
}

sumarTodos(2,2,8);

cuadrado(5); //5 <- es el argumento enviado
cuadrado(2,3);
hola();
hola("Diego");