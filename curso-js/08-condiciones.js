/*

*/

if(true);
if(5 == 5);
if( 5 < 3 && 10 != 10);

//En una linea
if(10) console.log("10 es truthy");
0 ? undefined : console.log("0 es falsy");

//Si es solo un bloque no es nesario usar {}
if(5 == '5')
    console.log("coercion");

if(true) {
    console.log("Hola");
    console.log("Mundo");
}

if(false){
    console.log("Es verdadero");
} else {
    console.log("Es falso");
}

let calificacion = 9;

if (calificacion == 10){
    console.log("Excelente");
} else if (calificacion > 7) {
    console.log("Muy bien");
} else if (calificacion > 5){
    console.log("Puedes mejorar");
} else {
    console.log("Reprobado");
}