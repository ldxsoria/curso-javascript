// JavaScript Object Notation -> JSON

let curso = {
    titulo: "Curso profesional de JS",
    formato: "video",
    bloques: ["Introduccion", "Funciones"],
    inscribir: function(){
        console.log("Inscrito");
    }
}

console.log(curso["titulo"]);

curso.titulo = "Curso de python";
curso["inscribir"] = function(){console.log("Inscribir v2");}

console.log(curso.titulo);
curso.inscribir();

/*
ECMAScript 2015
SHORTHAND SYNTAX

*/

// Antes
let nombre = "Diego";
let usuario = {nombre : nombre};
console.log(usuario.nombre);

//Ahora
let Nombre = "Diego";
let Usuario = {Nombre};
console.log(Usuario.Nombre);