/*

DOM = Document Object Model
Cada elemento presente no documento de HMTL e um elemento do DOM
DOM basicamente eh uma organizacao de como a pagina vai ser exibida


*/

function clicou() {
    const teste = document.querySelector('#teste')
    console.log(teste.children[0].children) // usado pra saber o que tem na tag
    const ul = teste.querySelector('ul') // usado pra manipular

    console.log(ul.innerHTML) // innerHTML me retorna o que tem dentro da tag e tambem posso usar para manipular o conteudo
    ul.innerHTML = "<li>Item alterado</li>" // alterando o conteudo da tag
    ul.innerHTML += "<li>Item adicionado</li>" // adicionando um novo li na tag ul

    ul.children[0].innerHTML = "Item <strong>alterado</strong>" // innerHTML permite a insercao de codigos html
    ul.children[1].innerText = "Item <strong>alterado</strong>" // innerText permite a insercao de textos, caso seja inserido um cod HTML, sera tratado como texto

    console.log(ul.outerHTML) // retorna o conteudo da tag selecionada e dos filhos, inner retorna apenas o conteudo dos filhos

    ul.outerHTML = "Item <strong>alterado</strong>"
}