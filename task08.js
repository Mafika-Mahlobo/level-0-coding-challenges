function convertNumberToTime(number){
    var hours = 0;
    var minutes = 0;

    while(number >= 60){
        number -= 60;
        hours += 1;
    }

    minutes += number;

    if(hours > 1 && minutes > 1){
        console.log(hours+" hours, "+minutes+" minutes");
    }
    else if(hours > 1 && minutes == 1){
        console.log(hours+" hours, "+minutes+" minute");
    }
    else if(hours > 1 && minutes < 1){
        console.log(hours+" hours");
    }
    else if(hours == 1 && minutes > 1){
        console.log(hours+" hour, "+minutes+" minutes")
    }
    else if(hours == 1 && minutes == 1){
        console.log(hours+" hour, "+minutes+" minute");
    }
    else if(hours == 1 && minutes < 1){
        console.log(hours+" hour");
    }
    else if(hours == 0 && minutes > 1){
        console.log(minutes+" minutes");
    }
    else if(hours == 0 && minutes == 1){
        console.log("1 minute");
    }
    else{
        console.log("no hours or minutes");
    }
}

convertNumberToTime(71)