let arreglo = ["ruby", "python", "kotlin"];

//indexOf -> === posicion
//includes -> === true|false
//find -> funcion de prueba -> elemento encontrado
//some -> funcion de prueba -> true|false

//Para conocer la pocision
console.log(arreglo.indexOf("python"));

//Para saaber unicamente si existe el arreglo
console.log(arreglo.includes("python")); //true o false

//Buscar apartir de la posicion 1
console.log(arreglo.includes("ruby",1));

let respuesta = arreglo.find(function(elemento,posicion,arreglo){
    return elemento === 'kotlin';
});
console.log(respuesta)

let rpta = arreglo.some(function(elemento,posicion,arreglo){
    return elemento === 'python'
});
console.log(rpta)