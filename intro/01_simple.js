const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Informe o numero para o calculo da tabuada: ', (numero) => {
    numbertab = Number(numero); 
    
    for(let i = 0; i<=10; i++){
       let tab = numbertab * i;
       console.log(`${numbertab} x ${i} = ${tab}`)
    }

    readline.close();
});

