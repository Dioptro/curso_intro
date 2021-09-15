const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Quer saber qual ano é bissexto? poe ele aqui: ', (syear) => {
    let year = Number(syear);

    const test = 4; test1 = 100;

    let yeartest = year/test;
    let yeartest1 = year/test1;

    divisible = Number.isInteger(yeartest1);
    divide = Number.isInteger(yeartest);

    if(divisible == false && divide == true){

            console.log(`O ano ${year} é bissexto`);
    } else {

        console.log(`o ano ${year} não é Bissexto`);
    };
    
    readline.close();
});