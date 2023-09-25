"use strict";

var cartao = {
  nome_cliente: "Neiva",
  idade_cliente: 28,
  pdrodutos_consumidos: [{
    produto1: "Tênis branco",
    preco1: 250.00,
    qtd_comprada1: 3
  }, {
    produto2: "Casaco Jeans",
    preco2: 360.00,
    qtd_comprada2: 3
  }, {
    produto3: "Saia Jeans cintura alta",
    preco3: 190.00,
    qtd_comprada3: 4
  }]
};
console.log("".concat(cartao.nome_cliente, " ").concat(cartao.idade_cliente, " anos"));
idade_cliente = 25;
console.log(idade_cliente);
console.log(cartao.pdrodutos_consumidos[0]);
console.log(cartao.pdrodutos_consumidos[2].preco3);