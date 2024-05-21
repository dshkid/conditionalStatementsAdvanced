function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);

    let totalExamHour = examHour * 60 + examMin;
    let totalArriveHour = arriveHour * 60 + arriveMin;

    let totalTime = Math.abs(totalExamHour - totalArriveHour);
    let totalHour = Math.floor(totalTime / 60);
    let totalMin = totalTime % 60;

    if (totalExamHour === totalArriveHour) {
        console.log('On time');
    } else if (totalExamHour < totalArriveHour) {
        console.log('Late');

        if (totalTime < 60) {
            console.log(`${totalTime} minutes after the start`);
        }  else {
            if (totalMin < 10) {
                console.log(`${totalHour}:0${totalMin} hours after the start`);
            } else {
                console.log(`${totalHour}:${totalMin} hours after the start`);
            }
        }
    } else {
        if (totalTime <= 30) {
            console.log('On time');
            console.log(`${totalTime} minutes before the start`);
        }
        else {
            console.log('Early');

            if (totalTime < 60) {
                console.log(`${totalTime} minutes before the start`);
            }  else {
                if (totalMin < 10) {
                    console.log(`${totalHour}:0${totalMin} hours before the start`);
                } else {
                    console.log(`${totalHour}:${totalMin} hours before the start`);
                }
            }
        }
    }
}
onTimeForTheExam(["14", "00", "13", "55"]);