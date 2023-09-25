const dados = {
    nome: "Neiva",
    idade: "60",
    altura: "1.40",
    temCNH: false,
    apelidos: "Nene e Iva"
}

let textoCNH = "";

if (dados.temCNH === false) {
    console.log("Não possue CNH");
} else {
    console.log("Possui CNH");
}

console.log(`${dados.nome} tem ${dados.idade} anos, ${dados.altura}m de altura, tem os seguintes apelidos${textoCNH}`);

for (let apelido of dados.apelidos) {
    console.log(`  ${apelido}`)
}