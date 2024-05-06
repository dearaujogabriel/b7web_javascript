function soltou(e) {
    //console.log(e.key) // mostra de maneira mais simples qual tecla foi pressionada
    console.log('Tecla apertada ' + e.code) // mais completo, mostra o nome mais detalhado da tecla de input
    console.log('Shift? ' + e.shiftKey) // retorna true ou false se a tecla estava apertada
    console.log('Control? ' + e.ctrlKey)
    console.log('Alt? ' + e.altKey)
    console.log('------------') 
}

const input = document.querySelector('input')
input.addEventListener('keyup', soltou)