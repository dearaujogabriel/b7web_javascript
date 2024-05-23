class Person {
    // Propriedade que existe na classe mas nao foi instanciada no construtor
    altura = 0
    constructor(name, age){
    //propriedade   parametro
        this.name = name
        this.age = age
    }

}

let p1 = new Person("Gabriel", 26)
let p2 = new Person("Maria", 30)
let p3 = new Person("Ana", 21)

p1.altura = 180
p2.altura = 156
p3.altura = 160

console.log(`${p1.name} tem ${p1.age} anos e ${p1.altura}cm de altura`)
console.log(`${p2.name} tem ${p2.age} anos e ${p2.altura}cm de altura`)
console.log(`${p3.name} tem ${p3.age} anos e ${p3.altura}cm de altura`)