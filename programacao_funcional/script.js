function createPerson(name, lastname, age) {
    return {
        name,
        lastname,
        age,
        getFullName() { return `${this.name} ${this.lastname}` },
        start() { return `Deu start na pessoa` }
    }
}


let person1 = createPerson('Gabriel', 'Araujo', 26)
let person2 = createPerson('Ana', 'Azevedo', 21)
let person3 = createPerson('Cadu', 'Azevdo Araujo', 2)

console.log(`${person1.name}       ${person2.name}       ${person3.name}`)
console.log(`${person1.lastname}   ${person2.lastname}   ${person3.lastname}`)
console.log(`${person1.age}        ${person2.age}        ${person3.age}`)

console.log(person1.start())
console.log(person1.getFullName())