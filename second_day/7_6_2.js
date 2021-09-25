const csv = require('csv-parser');
const fs = require('fs'); // File System
const path = require('path'); // encontrar o arquivo
const filePath = path.join(__dirname, 'workout_date.csv'); //unir caminnho do arquivo com o arquivo do cod

const rows = [];

fs.createReadStream(filePath) //fluxo de leitura, vai interpretar o arquivo por pedaços
  .pipe(csv())    //pega o estilo de leitura e define o tipo, no caso o csv
  .on('data', (row) => {//on = evento, então a cada evento, ele abre uma linha nova
    rows.push(row);
  })
  .on('end', () => {
    const datesExercises = rows
      .filter((row) => row["name"] === "Marcle")
      .map((row) => row["date"]);
    const answer = madePhysicalActivity(datesExercises);

    console.log(`Fez atividade física nos últimos 7 dias? ${answer}`);
  });


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