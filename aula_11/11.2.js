
const first = (array, n=1) => {//definindo a variavel que vai listar as posições, ela pose ser substituida pelo usuario.
    const newArrey = [];

    for (let i = 0; i < n; i++) { //em vez do array, podemos usar o .slice da seguinte forma return array.splice(0, N), onde o N é o numero de indices percorridos.
        newArrey.push(array[i]); //colocando no novo array todos os iten encontrados até i.
    }
    return newArrey;//importante, aqui atualizamos o vetor no final do codigo.
};
console.log (first ([0,1,2,3,4], 2));