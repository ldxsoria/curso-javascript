/*
Estos son tipos de datos tambien
    undefined, es un objeto por un bug
    null
    NaN
*/

//Una variable sin valor
let a;
console.log(typeof(a)); //undefined

let total_horas = 8 * 60;
let avance = 0.27;
var total_avance = total_horas * avance;
let avance_en_horas = parseInt(total_avance / 60);
let avance_en_minutos = parseInt(total_avance % 60);
console.log('Total: ' + (total_horas / 60) + ' h.');
console.log('Progreso: ' + avance_en_horas + ' h. y ' + avance_en_minutos); 
