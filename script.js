let fruits = ['Maca', 'Uva', 'Banana']
for (let i in fruits) {
    console.log(fruits[i])
}

console.log('===== Outro metodo =====')
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])

}
console.log('===== Outro metodo =====')
for (fruit of fruits) {
    console.log(fruit)
}


let i = 1
while (i <= 100) {
    console.log(i)
    i++
}