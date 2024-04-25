let fruits = ['Ameixa', 'Maca', 'Laranja', 'Banana', 'Uva']

let bigFruits = fruits.filter((item) => {
    if (item.length > 4) {
        return true
    } else {
        return false
    }
})

console.log(bigFruits)
console.log(fruits)


let ok = fruits.every((value) => { 
    return value.length > 3 // retorna true se todos os itens do array satisfazem a condicao
})

if(ok){
    console.log('Todos sao maiores que 3')
} else {
    console.log('Nao sao todos que sao maiores que 3')
}

let vasco = fruits.some((value) => { 
    return value.length > 20 // retorna true se algum dos itens do array satisfaz a condicao
})

if(vasco){
    console.log('Algum dos itens sao maiores que 20')
} else {
    console.log('Nenhum item e maior que 20')
}

if (fruits.includes('Uva')) { // verifica se contem o item especificado no array
    console.log('Tem uva')
} else {
    console.log('Nao tem uva')
}
