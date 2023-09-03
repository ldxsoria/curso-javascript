let potencia_maxima = 700
let niveles = 5

let potencia_necesaria = 560

let rangos = []
let suma = 0;
let valores = potencia_maxima / niveles;

for (let w=0; w < niveles; w++){
    rangos[w] = valores + suma;
    suma = valores + suma;
}


console.log(rangos)


