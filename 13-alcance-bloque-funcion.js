function hola(nombre){
    if(nombre){
        //Solo en bloque y no fuera == Error al usar let o const
        //const saludo = "Hola " + nombre; //error
        //let saludo = "Hola " + nombre; //error
        //al bloque mas proximo, es decir sobre el if si funciona
        //porque el if seria el bloque mas proximo
        var saludo = "Hola " + nombre;
    }
    console.log(saludo)
}

hola("Diego");