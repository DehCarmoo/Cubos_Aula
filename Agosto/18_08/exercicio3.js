function pessoas(pessoa) {
    if (pessoa.idade < 25)
        console.log(`Olá, sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e  sou ${pessoa.profissao}`)

    else if (pessoa1.idade < 65)
        console.log(`Olá, sou ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos e  sou ${pessoa.profissao}`)

    else {
        console.log(`Olá, sou ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos e  sou ${pessoa.profissao}`)
    }

    const pessoa1 = {
        nome: "Jose",
        idade: 25,
        profissao: "programador"

    }

    pessoas(pessoa1);

    const pessoa2 = {
        nome: "Neitan",
        idade: 24,
        profissao: "programador"
    }
    pessoas(pessoa2)



    const pessoa3 = {
        nome: "Debora",
        idade: 22,
        profissao: "programadora"
    }


    pessoas(pessoa3);

}


