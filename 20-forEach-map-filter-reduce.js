let lenguajes = ["java", "ruby", "python", "kotlin", "javascript"];

//forEach
lenguajes.forEach(function(element){console.log(element);});
lenguajes.forEach(function(element,indice,arreglo){console.log(element,indice,arreglo);});

//map
// puedo usar para transformar todos los elementos a un nuevo arreglo
let numeros = [1,2,3,4,5];

let cuadrados = numeros.map(function(numero){ return numero * numero;});
console.log(cuadrados);

//filer
//solo guarda los elementos que retornen true y se descartan los false
// lo puedo usar tambien para eliminar cosas
let numbers = [5,4,7,9];

let nuevoArreglo = numbers.filter(function(numero){
    return numero % 2 === 0;
})

console.log(nuevoArreglo);

//reduce
let Numeros = [1,2,3,4,5];

Numeros.reduce(function(acc, elemento){
    console.log(acc);
    return 1;
},1)

let suma = Numeros.reduce(function(acc, numero){
    return acc + numero;
}, 0)

console.log(suma)