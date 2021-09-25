let array = [1,2,3,4,5];

const remove = (array, element) =>{
    let elementIndex = array.indexOf (element)
    array.splice (elementIndex, 1);
    
    return array;
};
console.log(remove(array, 2));