function gravidade() {
    console.log("A gravidade da Terra é: ")
    console.log(9.8)
}
//gravidade()


function somar(x, y) {
    let resultado = x + y
    console.log("Resultado: " + resultado)
}

//somar(10, 20)

function nomeCompleto(nome, sobrenome) {
    let completo = `${nome} ${sobrenome}`
    return completo
}

//console.log(nomeCompleto("Gabriel", "Araujo"))
//console.log(nomeCompleto("Ana Valeria", "Azevedo"))
//console.log(nomeCompleto("Carlos Eduardo", "Azevedo Araujo"))


function menorDeIdade(idade) {
    if (idade >= 18) {
        return true
    } else {
        return false
    }
}

let verificacao = (menorDeIdade(17))
if (verificacao) {
    //console.log("Maior de idade")
} else {
    //console.log("Menor de idade")
}

function maiorDeIdade(idade) {
    let verificacao = idade >= 18 ? "Maior de idade" : "Menor de idade"
    return verificacao
}
//console.log(maiorDeIdade(19))

function calcPct(n1, n2) {
    return n2 / n1 * 100
}
let x = 40
let y = 10
let pct = calcPct(x, y)
//console.log(`${pct}% de ${x} é ${y}`)

function calcularImovel(metragem, quartos) {
    let m2 = 30000
    let preco = 0
    switch (quartos) {
        case 1:
            preco = metragem * m2
            break
        case 2:
            preco = metragem * (m2 * 1.2)
            break
        case 3:
            preco = metragem * (m2 * 1.5)
            break
        default:
            preco = metragem * (m2 * 2)
            break
    }
    return preco
}

let metragem = 123
let quartos = 2
console.log(`A casa custa R$ ${calcularImovel(metragem, quartos)}`)


