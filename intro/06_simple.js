const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Preço de custo do automovel: ', (number) => {
    let tribute = 1.15; profit = 1.12;
    let price = Number(number);
    valueTribute = price * tribute;
    valueTotalcar = valueTribute * profit;
    
    console.log(`O valor de revenda do carro é ${valueTotalcar}`)

    readline.close();
});