const email = "Debililica@hotmail.com"

const indexArroba = email.indexOf("@");
const indexPosArroba = email.indexOf(".", indexArroba);

if (indexPosArroba > indexArroba) {
    console.log("O email atende as requisições necessárias")
} else {
    console.log("O email inserido não atende as requisições necessárias do nosso sistema")
}