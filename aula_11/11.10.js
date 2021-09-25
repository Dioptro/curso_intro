// const unique = (array) =>{
//    const set = new Set (array); //função Set = gera uma copia dos arquivos sem repetições.

//    return [...set];
// };

const unique = (array) => {
const newArray = [];

    for (let value of array){
        const existel = newArray.indexOf(value);
        if (existel === -1){
            newArray.push(value);
        }
    }
    return array; 
};
console.log (unique ([1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]));
