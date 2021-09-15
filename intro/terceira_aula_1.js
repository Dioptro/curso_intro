const NewMatrix = (countcoluna,countlinha) => {
   const matrix = [];
   let  number = 1;
    
   for(let i = 0; i < countlinha; i++) { //adiciona a linha
        const linha =[];//linha === array vazio 

        for(let j = 0; j < countcoluna; j++){  //countlinha e count coluna são numeros que transfomarão-se(ta errado eu sei) em linhas e colunas da matix
            linha.push(number);
            number++;
        }

        matrix.push(linha);
    }

    return matrix; // semrpe esqueço
};

console.log(NewMatrix(50,50));
