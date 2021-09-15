
var balance = s => {
    s = [1000]
    console.log(s)  
}

var balancedStringSplit = function balance(s){

    let total = 0; 
    let balanced = 0;

    const letters = s.split(" ");

    for(i=0; i<=letters.length; i++){
        const letter = letters[i];

        if (letter === 'R'){
            balanced += 1;
        }
        if (letter === 'L'){
            balanced -= 1;
        }
        if (balanced === 0){
            total += 1
        }
    }
    console.log(total)
    return total
};
balancedStringSplit("");