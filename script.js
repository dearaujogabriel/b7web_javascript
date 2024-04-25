let fruits = ['Maca', 'Uva', 'Laranja', 'Banana']


fruits.push('Kiwi') // adiciona no final da fila
console.log(fruits)
fruits.pop() // remove o ultimo do array
console.log(fruits)
fruits.shift() // remoce o primeiro item do array
console.log(fruits)

console.log(fruits.length)

let test = fruits.join('; ') // agrupa os itens do array em uma string
console.log(test)

fruits[1] = 'Pera' // define o valor de um item do array especificado pelo index
console.log(fruits)


fruits[fruits.length - 1] = 'Limao' // define o valor de um item do array especificado pelo index
console.log(fruits)

fruits.pop() // remove o ultimo item
fruits.push('Limao') // adiciona no final do array
console.log(fruits)

