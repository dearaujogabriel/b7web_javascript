class Person {
    // Propriedades que existem na classe mas nao foram instanciadas no construtor
    height = 0
    steps = 0
    _age = 0

    constructor(firstName, lastName) {
        //propriedade   parametro
        this.firstName = firstName
        this.lastName = lastName
    }

    takeAStep() {
        this.steps++
    }

    setAge(newAge) {
        if (typeof newAge == "number") {
            this.age = newAge
        } else {
            console.log(`Idade não aceita. Informe um número`)
        }
    }

    get age() {
        return this._age
    }
    
    set age(x) {
        this._age = x
    }

    get fullname() {
        return `${this.firstName} ${this.lastName}`
    }

}

let p1 = new Person("Gabriel", "Araujo")
let p2 = new Person("Maria", "Silva")
let p3 = new Person("Ana", "Azevedo")
p1.height = 180
p2.height = 156
p3.height = 160

p1.age(26)
p2.age(22)
p3.age(24)

console.log(`${p1.fullname} tem ${p1.age} anos e ${p1.height}cm de altura`)
console.log(`${p2.fullname} tem ${p2.age} anos e ${p2.height}cm de altura`)
console.log(`${p3.fullname} tem ${p3.age} anos e ${p3.height}cm de altura`)

p1.takeAStep()
console.log(`Passos de ${p1.name}: ${p1.steps}`)