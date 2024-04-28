function clicou() {
    const input = document.querySelector('input')
    const botao = document.querySelector('.botao')

    if (input.hasAttribute('placeholder')) { // hasAttribute verifica se o elemento tem atributo
        console.log('Tem placeholder sim!')
    } else {
        console.log('Nao tem placeholder')
    }

    if (input.getAttribute('type') === 'text') { // getAttribute pega o valor do atributo
        input.setAttribute('type', 'password') // setAttribute altera o valor do atributo
        botao.innerText = 'Mostrar senha'
    } else {
        input.setAttribute('type', 'text')
        botao.innerText = 'Ocultar senha'
    }
}