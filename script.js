function clicou() {
    const teste = document.querySelector('#teste')
    const ul = teste.querySelector('ul')
    // const newButton = document.createElement('button')
    // newButton.innerHTML = 'Botao'
    // ul.after(newButton)
    // ul.after("Texto adicionado com AFTER")
    // ul.before("Texto adicionado com BEFORE")

    let newUl = document.createElement('ul') // crio o elemento na memoria
    ul.after(newUl) // elemento criado na tela

    // crio e adiciono novos elementos ao elemento newUl
    for(let i = 0; i < 5; i++) {
        let newLi = document.createElement('li')
        newLi.innerText = 'Item adicionado ' + (i + 1)
        newUl.append(newLi)
    }
}