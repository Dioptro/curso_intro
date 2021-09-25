const get_array = (array) => {
    array.sort ((a, b) => b - a);
    return array
};

console.log (get_array ([1,5,2,7,9,4]));