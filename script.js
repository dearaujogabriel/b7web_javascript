// elementos
const ul = document.querySelector('ul')
const input = document.querySelector('input')

//funcoes
function handleKeyUp (e) {
    if(e.key === 'Enter') {
        const newLi = document.createElement('li')
        newLi.innerText = input.value
        ul.appendChild(newLi)
        input.value = ''
    }
}

// eventos
input.addEventListener('keyup', handleKeyUp)