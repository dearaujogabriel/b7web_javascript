/*

DOM = Document Object Model
Cada elemento presente no documento de HMTL e um elemento do DOM
DOM basicamente eh uma organizacao de como a pagina vai ser exibida


*/

function clicou() {
    alert('Clicou no botao')
}

let botao = document.querySelector('.botao')
botao.addEventListener("click", () => {
    clicou()
})