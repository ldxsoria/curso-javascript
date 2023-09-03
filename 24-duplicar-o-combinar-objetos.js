let user = {
    edad: 20,
    nombre: "Diego"
}

let esquemaPermisos = { nivel: 2}

// -------------------------------------------->
let admin = {...user, ...esquemaPermisos, nombre: "Luis"}

let copia = Object.assign({}, user)

console.log(admin);
console.log(copia);