function idadeRecebida(idade) {
    if (idade <= 21)
        return "Jovem";

    else if (idade >= 22 && idade === 65)
        return "Adulto(a)";

    else {
        return "Idoso(a)";
    }
}

const acessoIdade = idadeRecebida(75);
console.log(acessoIdade);
