const get_array = (array, n) => {
    return array.splice (n*-1);// quando usamos a simbologia negativa, indicamos que queremos os ultimos indices do array
}

console.log (get_array ([1,2,3,4,5], 2))