
//VERSION 1
let total_horas = 8 * 60;
let avance = 0.35;
var total_avance = total_horas * avance;
let avance_en_horas = parseInt(total_avance / 60);
let avance_en_minutos = parseInt(total_avance % 60);
console.log('Total: ' + (total_horas / 60) + ' h.');
console.log('Progreso: ' + avance_en_horas + ' h. y ' + avance_en_minutos + " m."); 

//VERSION 2
const duracion_minutos = 8 * 60;
let avance_porcentaje = 35 / 100;
let avance_minutos = (duracion_minutos * avance_porcentaje) / 1;
let horas;
let minutos;

for(let i = 1; i <= avance_minutos; i++){
    if(i % 60 === 0){
        horas = i / 60;
    } else {
        minutos = i % 60;
    }
}

console.log('Progreso: ' + horas + ' h. y ' + minutos + " m.");  

//VERSION 3
meta = 8;
progreso_porcentual = 35;
let progress = ((meta * 60) * (progreso_porcentual / 100)) / 1;

let h = Math.floor(progress  / 60);
let m = progress % 60;

console.log('Progreso: ' + h + ' h. y ' + m + " m.");  
