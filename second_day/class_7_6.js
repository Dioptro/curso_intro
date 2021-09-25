const datesExercises = [
    '2020/2/10',
    '2021/2/4',
    '2021/2/1',
    '2021/2/7',
    '2021/2/5',
  ];
  
  const answer = madePhysicalActivity(datesExercises);
  
  console.log(`Fez atividade física nos últimos 7 dias? ${answer}`);
  
  function madePhysicalActivity(datesExercises) {
    const aDayMilisec = 86400000;
    const sevenDaysAgoMilisec = new Date().getTime() - (aDayMilisec*7);
  
    for(let date of datesExercises) {
      if (new Date(date).getTime() > sevenDaysAgoMilisec) {
        return 'SIM';
      }
    }
  
    return 'NãO';
  }