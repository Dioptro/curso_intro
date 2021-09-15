const readline = require('readline'); //solicitando a função

const resposta = readline.createInterface({  //parametros pra entrada e saida de dados da função
    input: process.stdin,
    output: process.stdout
});

resposta.question('informe o veotr a ser transcrito de forma inversa: ', (answer)=>{  //pergunta na tela
    const numbers = answer.split(',') //separando numeros por virgula nota-se que o espaço antes e dps posto
    //dentro das aspas influencia no funcionamento do codigo, buscar como passar por isso.

    const newarray = [];// vetor onde os numeros são armazenados dps da inversão

    for(let i = 0; i < numbers.length; i++) {          //contador contando dentro do tamanho da string(.length)
        const newIndex = numbers.length -1 -i;  //na primeira interação o ultimo valor da string é guardado em newindex, pois i=0
      
        newarray.push(numbers[newIndex]);         //coloca o ultimo valor de numbers, na primeira posição de newarray
    }

    console.log(newarray); //mostra na tela

    resposta.close();//fecha o readline

});
