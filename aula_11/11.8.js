const range = (start, end) => {
    const array = [];
    
    if (start < end) {
        for (i = start; i <= end ; i++) {
            array.push (i);
        }
    } else {
        newvariable = start;
        start = end;
        end = newvariable;
        for (i = start; i <= end ; i++){
            array.push (i);
        }
        return array;
    }  
    return array;
};

console.log (range (1, 10));
console.log (range (10, -10));