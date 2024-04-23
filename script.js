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