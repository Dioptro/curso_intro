    const exerdates = [
        '2020/05/15',
        '2020/01/13',
        '2020/02/20',
        '2020/03/10',
        '2020/05/11',
        '2021/06/20',
    ];

    const finddate = (dates) => {//função para percorrer as datas
        let maxdate;///variavel da maior data

        dates.forEach((date, index) => { //passa pelas datas e pelos index
        const convertedDate = new Date(date); //recebe a data lida

        if(index === 0){ //se for a primeira data, a varial da maior data recebe o valor de converteddate
            maxdate = convertedDate;
        }else{ // compara as variaveis atraves do gettime, se conveted for maior, o vlaor é guardado em max date, e repete o laço.
            if(convertedDate.getTime() > maxdate.getTime()){
                maxdate = convertedDate;
             }
        }
       
        });
        console.log(maxdate);
    };

finddate(exerdates);