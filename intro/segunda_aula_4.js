//tenho que pegar os elementos do array e posicionar um a um.
//pego o elemento e coloco no array[0], 
//pego o segundo elemento e comparo com o array[0], se maior, ele vai pro array[1],
//se não ele fica no array[0] e o array[0] passa pra array[1]
//


const vetor = (array) => {
    const vetorum = [];

    array.forEach(element => { 
        if(vetorum.length > 0) {
            const fistnumber= vetorum.find((vetorumnumber) => vetorumnumber >= element)//compara um item do array
            //com element, se ele for menor ou igual, guarda o valor em fistnumber            
            if(fistnumber){// se fistnumber não for vazio
                const lastElementIndex = vetorum.indexOf(fistnumber);//Indexoff procura o indice de fistnumber dentro do vetor1 e guarda em last element index
                vetorum.splice(lastElementIndex, 0, element); //splice( indice de inicio, quantos elementos quer tirar, elemento q quer por)
            } else{
                vetorum.push(element); // se fistelement for vazio, coloca o element no primeiro index
            }

        } else{    
            vetorum.push(element); // se lastelement for vazio, coloca element no primeiro index
        }

    });
    return vetorum;
};

console.log(vetor([10,2,1,5,9,20,60,100,90,50,0,99]))

