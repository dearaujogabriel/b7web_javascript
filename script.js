
function validar(usuario, senha) {
    if(usuario === "gabriel" && senha === "123") {
        return true
    } else {
        return false
    }
}

let usuario = "gabriel"
let senha = "123"

let validacao = validar(usuario, senha)
if (validacao) {
    console.log("Access allowed!")
} else {
    console.log("Access denied!")
}


