const get_array = (array) => {
    array.sort ((a, b) => a - b);
    return array
};

console.log( get_array ([1,5,2,7,9,4]));// console.log(get_Array([asdfadfasdfasf]))

// Função SORT
// const get_Array = (array) => {
//     const newArray = [];
//     for (let i = 0; i<array.length; i++){
//         value = array[i];
//         if(i === 0){
//             array.push(value);
//         }else{
//             const last = newArray[-1];
//             if(last){
//                 newArray.splice(newArray.indexOf(last, 0, value));
//             }else{
//                 newArray.push(value);
//             }
//         }
//     }
//     return newArray;
// };












