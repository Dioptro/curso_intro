            

const vetor = (array) => {   // definindo a função que vai receber um vetor chamado de array
    if(array[0]>= array[1]){ // se a posição 0 array for maior que a posição 1 do array, temos
        const oldValue = array[0];//guarda o valor da posição zero em uma variavel qualquer
        array[0] = array[1]; // substitua o valor da posição 0 pelo valor da posição 1
        array[1] = oldValue; // o valor da variavel é atribuido a posição 1
    }
    if(array[0] >= array[2]){
        const oldValue = array[0];
        array[0] = array[2];
        array[2] = oldValue;
    }
    if(array[1]>= array[2]){
        const oldvalue = array[1];
        array[1] = array[2];
        array [2] = oldvalue;
    }
    return array   //retorna array para atualizar a informação
};
console.log(vetor([10,1,9]))  //teste 1
console.log(vetor([9,4,7]))   // teste 2