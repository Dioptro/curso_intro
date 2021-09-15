const jewels = 'B', rocks = 'cAaaaABBBBBBBBBBBBBBB';
total = 0;

for(let i= 0; i<= rocks.length; i++){
    rock = rocks[i];

    if(jewels.includes(rock) == true){
        total = total +1;
    }
}
console.log(total);