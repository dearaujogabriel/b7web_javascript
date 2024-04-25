// let fruits = ['Ameixa', 'Maca', 'Uva', 'Laranja', 'Banana']
// console.log(fruits)

// fruits.sort() // faz a ordenacao alfabetica do array
// console.log(fruits)

// fruits.reverse() // inverte a ordem do array
// console.log(fruits)


let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'Ferrari', year: 2020},
    {brand: 'BMW', year: 2023},
    {brand: 'Lamborghini', year: 2000}
]
console.log(cars)

cars.sort((a, b) => {
    console.log( a.year - b.year)
    return a.year - b.year
})

cars.sort((a, b) => {
    if(a.year > b.year){
        return 1
    } else if(a.year < b.year){
        return -1
    } else {
        return 0
    }
})

console.log(cars)