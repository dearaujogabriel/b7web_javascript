class Person {
    
    age = 0

    constructor(firstName) {
        this.firstName = firstName
    }

    sayHi() {
        console.log(`${this.firstName} diz 'Oi'`)
    }

}

class Student extends Person {

    constructor(name, id) {
        super(name)
        this.id = id
    }

    sayHello() {
        super.sayHi()
    }

}

let p1 = new Student('Gabriel', 1)
p1.age = 20

p1.sayHello()

console.log(`${p1.firstName} tem ${p1.age} e matricula ${p1.id}`)