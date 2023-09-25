/*const saldo = 1

if (saldo == 1) {
    console.log(`Você tem ${saldo} real`);
} else {
    console.log(`você tem ${saldo} reais`);
}*/

const saldo = 1

const unidade = (saldo == 1 ? "real" : "reais");

console.log(`Você possui ${saldo} ${unidade}`);
