const lastDay = (month, year = '2021') =>{
    const date = new Date(year, month, 0);
    console.log(date.getDate());//get date faz tudo, eu so preciso passar a data dentro da função
}

lastDay(2);