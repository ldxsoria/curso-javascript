// Hoisting
// La variable es colocad al inicio del scope


// Solo aplicaca en la creacion de variables

function demo(){
    var x;
    console.log(x);
}

demo(); //undefined

//NO APLICA en la asignacion de variables

console.log(y);
var y = 10; //undefined

//, pero con funciones si es posible LLAMARLA ANTES DE SER DECLARADA

console.log(suma(10,4));

function suma(a,b){ return a + b; } //14
