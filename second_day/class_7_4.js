
const totalyms = 24*60*60*1000; // dia em ms
const date = new Date();//passa a data do dia
const oldDate = new Date(2017-01-01);//passa a data expressa
const difftime = date.getTime() - oldDate.getTime(); //.getTime pega a data em milessegundos
const diffdays = Math.floor(difftime / totalyms); //math.floor é usado para arrendondar os dados.

console.log(diffdays)