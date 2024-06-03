class Person {
    
    static hands = 2
    age = 0

    constructor(name) {
        this.name = name
    }
}

let p1 = new Person("Gabriel")

console.log(`Me chamo ${p1.name} e tenho ${Person.hands} maos`)