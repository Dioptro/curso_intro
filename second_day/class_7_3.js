const { stdin } = require('process');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Insira uma data: ',(date) => {
    let [day, month, year]  = date.split("\/"); //quebra e já joga em cada lugar hehe
    
    console.log(month)
    
    if(year>0){
        if(month<=12){
            if(day<=30){
                console.log('é uma data valida.');
            }else{
                console.log('não é uma data valida.');
            };
        }else{
            console.log('não é uma data valida.');
        };
    }else{
        console.log('não é uma data valida.');
    };
    
    readline.close();
});