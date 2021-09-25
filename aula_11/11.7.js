const find = (array, element) => {
    const index = array.indexOf(element);// indexof encontra o indice que eu to pedindo

    return index>=0? index: null;
};

console.log (find([1,2,3], 10));
console.log (find([1,2,3], 2));