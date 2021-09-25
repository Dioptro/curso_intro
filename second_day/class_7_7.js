const datesexer = [
    '2020/2/10',
    '2021/2/4',
    '2021/2/1',
    '2021/2/7',
    '2021/2/5',
    '2021/1/1',
  ];
  
  const madePhysicalActivity = (dates) => {
    const firstDayOfYear = new Date(2021, 0, 1); //função que tem o valor da comparação
    let result = 'Não'; //se não for igual
  
    for(let date of dates) { //lê o arquivo data a data 
      const convertedDate  = new Date(date); //a variavel recebe o valor da data
  
      if (convertedDate.getTime() === firstDayOfYear.getTime()) { // e compara com o valro da data do dia 1
        result = 'Sim'; //se for igual
        break;
      }
    }
  
    console.log(result);
  };
  
  madePhysicalActivity(datesexer);