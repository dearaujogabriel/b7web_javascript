let personagem = {
    nome: 'Gabriel',
    idade: 26,
    pais: 'Brasil',
    sexo: 'Masculino',
    caracteristicas: {
        forca: 100,
        magia: 100,
        classe: 'Nobre'
    },
    olhos: ['Azul', 'Vermelho']
}

console.log(`${personagem.nome} tem ${personagem.idade} anos e mora no ${personagem.pais}. Tem ${personagem.caracteristicas.forca} pontos de forca, ${personagem.caracteristicas.magia} pontos de magia e sua classe eh ${personagem.caracteristicas.classe}`)
console.log(`Seu olho esquerdo eh ${personagem.olhos[0]} e seu olho direito eh ${personagem.olhos[1]}`)

personagem.nome = 'Cadu'

console.log(`${personagem.nome}`)

personagem.caracteristicas.forca += 5

console.log(`${personagem.caracteristicas.forca}`)

personagem.olhos.push('Verde')
console.log(personagem.olhos[2])

let persona = {
    nome: 'Gabriel',
    idade: 26, 
    carros: [
        {modelo: 'Ferrari', cor: 'Vermelho'},
        {modelo: 'Volvo', cor: 'Preto'},
        {modelo: 'Fiat', cor: 'Verde'}
    ]
}
console.log(persona.carros[0].modelo)
console.log(persona.carros[0].cor)