let pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Araujo', 
    idade: 26,
    nomeCompleto: function () {
        return this.nome + ' ' + this.sobrenome
    }
}

console.log(pessoa.nomeCompleto())

// em funcoes anonimas nao funciona pois uma funcao sem pai nao pode acessar os atributos do proprio objeto
let pessoas = {
    nome: 'Gabriel',
    sobrenome: 'Araujo', 
    idade: 26,
    nomeCompleto: () => {
        return this.nome + ' ' + this.sobrenome
    }
}

console.log(pessoas.nomeCompleto())