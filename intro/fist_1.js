const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stout
  });
  
  readline.question('Insira o dado:', (entrada) => {
    const convertido = Number(entrada);
  
    mostraSucessor(convertido);
  
    readline.close();
  });
  
  
  const mostraSucessor = (entrada) => {
    const sucessor = entrada + 1;
  
    console.log(`O sucessor é: ${sucessor}`);
  
    return sucessor;
  };