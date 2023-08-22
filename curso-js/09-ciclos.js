// Imprimir numeros del 1 al 10

/*
1. Instruccion inicial
2. Condicion
3. Instruccion despues de cada iteracion
*/

for (let i=1; i<=15 ; i++ ){
    if(i == 12) { 
        console.log("Termina el codigo al llegar al 12");
        break;
    } else if (i == 11){
        console.log("Se salta el 11");
        continue;
    } else {
        console.log(i);
    }
}

/*
Ciclo while, se ejecuta
siempre que la condicion
sea true
*/
let e = 1
while(e <= 10){
    console.log(e);
    e++;
}

// while(prompt()){
//     console.log("ejecucion");
// }

/*
do while, la condicion se ejecuta
despues de la iteracion
*/
e = 1
do{
    console.log(e);
    e++;
} while(e <= 5);