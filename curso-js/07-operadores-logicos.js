/*
Los operadores logicos roternan
cualquier tipo de valor

&&  El operador AND
||  El operador OR
!   El operador de negacion o NOT
??  El operador nullish coalescing // fusion de nulos o union nulosa

*/


console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

let edad = 28;

console.log(edad > 18 && edad < 30);
console.log(edad > 18 && edad < 25);

console.log(20 && 10); //va a traer el ultimo truthy(10)
console.log(20 && 5 && false); //va a traer el primer falsy(false)

// NOT
console.log(!0);

//RETORNA EL VALOR diferente a falsy
console.log(null ?? "hola");
console.log("Diego" ?? undefined);
