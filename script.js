function clicou() {
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')

    // adicionado assim, usando o innerHTML gasta mais processamento pois pega o que ja existe, adiciona o que voce quer e altera o conjunto
    ul.children[0].innerHTML += "Alterado" 

    // usando o append, ele apenas adiciona, nao altera o conteudo original
    ul.children[1].innerHTML += "Alterado" 

    // modo errado de adicionar um novo elemento. O elemento nao e criado, apenas inserido o texto
    ul.append("<li>Item adicionado</li>")

    // jeito mais longo, porem mais efeciente de adicionar um novo item
    let newLi = document.createElement('li')
    newLi.innerHTML = 'Item adicionado'
    ul.appendChild(newLi)

    // jeito mais curto, porem gasta mais processamento e memoria
    ul.innerHTML += '<li>Item adicionado</li>'

    // funcionamento parecido com o append, porem adiciona no inicio
    ul.prepend(newLi)

}