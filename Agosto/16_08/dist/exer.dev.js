"use strict";

var dados = {
  nome: "Neiva",
  idade: "60",
  altura: "1.40",
  temCNH: false,
  apelidos: "Nene e Iva"
};
var textoCNH = "";

if (dados.temCNH === false) {
  console.log("Não possue CNH");
} else {
  console.log("Possui CNH");
}

console.log("".concat(dados.nome, " tem ").concat(dados.idade, " anos, ").concat(dados.altura, "m de altura, tem os seguintes apelidos").concat(textoCNH));
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = dados.apelidos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var apelido = _step.value;
    console.log("  ".concat(apelido));
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}