/**
 Son grupos de datos
 */

 let calificacion = [10,8,9,6,6];
 let arreglo = ["django","react",1,{},function(){},[1,2,3]];
 console.log(arreglo);
 console.log(arreglo[0]);
 console.log(arreglo[4]);
 arreglo[4] = "Hola";
 console.log(arreglo[4]);
 arreglo.push("al final"); //pop para eliminar, shift, elimina al princio 
 arreglo.unshift("al principio");
 console.log(arreglo);

 //Recorrer un arreglo
 let lista = [1,2,3,4];

 for(let i = lista.length - 1; i >= 0; i--){
    console.log(
        lista[i]
    );
 }
