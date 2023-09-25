let produto_com_desconto = 324;
let produto_sem_desconto = 360;
let pagamento_a_vista = false;

if (!pagamento_a_vista) {
    console.log(`Caro cliente, o valor da compra é de ${produto_sem_desconto} reais.`);
    console.log("Parcelamos em até 6x sem juros no cartão e sem desconto");
} else {
    console.log(`Parabéns, você ganhou 10% de desconto e pagará apenas ${produto_com_desconto} reais`);
}