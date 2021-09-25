
const csv = require('csv-parser');
const fs = require('fs'); //file stream
const path = require('path');
const readlineSync = require('readline-sync');

const filePath = path.join(__dirname, 'menu_.csv');

const menu = {};
let total = 0;
let quantity = 0;

fs.createReadStream(filePath)
    .pipe(csv())
    .on('data',(row) => {
    menu[row.code] = Number(row.price);//atribuindo preço ao code
    //{'cod': '001', 'name': 'Pizza P', 'price': '20' }
    })
    .on('end', () => {
        let run = true;

        while (run) {
            const codInput = readlineSync.question('Codigo do item: ');
           
            if (codInput === 'fim') break;
        
            const item = menu[codInput]
            if (item) {
                quantity = Number(readlineSync.question('Quantidade: '));
                if (quantity === 'fim') break;
                total += item * quantity;          
            } else {
                console.log('Invalid Code');
            }
        }
        console.log(`Valor total: ${total}`)
    });