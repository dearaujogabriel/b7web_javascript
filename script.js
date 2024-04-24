let cores = ['verde', 'vermelho', 'azul', 'rosa', 'preto', 'branco', 'lilas']

let colors = [
    {nome: 'preto', qtd: 10 },
    {nome: 'branco', qtd: 5 },
    {nome: 'azul', qtd: 4 }
]
// for(let i = 0; i <= cores.length; i++) {
//     console.log(cores[i])
// }

// for(let cor in cores){
//     console.log(cores[cor])
// }

for(let cor of cores){
    console.log(cor)
}

for (let cor of colors) {
    console.log(`${cor.nome} ${cor.qtd}`)
}

for (let i in colors){
    colors[i].nome = cores[i].toUpperCase()
    console.log(colors[i])
}

console.log(colors)