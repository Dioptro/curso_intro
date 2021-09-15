
const readline = require('readline').createInterface({

        input: process.stdin, /* entrada padrão de dados, atenção a virgula ao fim de stdin */
        output: process.stdout /*Saida padrão de dados */
});

    readline.question('insira o dado:', (entrada) => {

        const convertido = Number(entrada); /* Convertendo a entrada de string pra numero, respeitar letra maiusula */1
        
        mostraSucessor(convertido);

        readline.close();
});

const mostraSucessor = (entrada) => {

    const sucessor = entrada + 1;

    console.log(sucessor); /* POdemos substituir essas 3 linhas de codigo por return entrada +1 */
    
    return sucessor;
};
