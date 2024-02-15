let hours = document.querySelector("#hrs");
let minutes = document.querySelector("#mins");
let seconds = document.querySelector("#secs");
let weekDays = document.querySelector("#dateNum");
let month = document.querySelector("#monthNum");
let years = document.querySelector("#yearNum");
let radio = document.getElementsByClassName(".radioBtn");
let week = document.querySelector("#weekDay");
let am = document.querySelector(".am");
let pm = document.querySelector(".pm");

    
function convertHour(hrs){
    if(hrs > 12){
        hrs = hrs - 12;
        return hrs;
    }else if(hrs == 0){
        return 12;
    }else{
       return hrs;
    }
}
function convertHourDigit(hrs){
    if(hrs < 10){
        hrs = '0' + hrs;
        return hrs;
    }else{
        return hrs;
    }
}
function timeConvert(hrs){
    if(hrs < 10){
        hrs = '0' + hrs;
        return hrs;
    }else{
        return hrs ;
    } 
}
function convertMinutes(mins){
    if(mins < 10){
        mins = '0' + mins;
        return mins;
    }else{
        return mins ;
    }
}
function convertSeconds(secs){
    if(secs < 10){
        secs = '0' + secs;
        return secs;
    }else{
       return secs ;
    }
}


function convertDates(dates){
    if(dates < 10){
        dates = '0' + dates;
        return dates;
    }else{
        return dates ;
    }
}

function duplicateHours(hourDuplicate){
    if(hourDuplicate > 11){
        return pm ="PM";
    }else{
        return am = "AM";
    }
}

function updateClock(){
    let date = new Date();
    let hourDuplicate = date.getHours();
    hourDuplicate = duplicateHours(hourDuplicate);

    let hrs = date.getHours();
    hrs = convertHour(hrs);
    hrs =  convertHourDigit(hrs)
    
    let mins = date.getMinutes();
    mins = convertMinutes(mins);
  
    let secs = date.getSeconds();
    secs = convertSeconds(secs);
    
    let dates = date.getDate();
    dates = convertDates(dates);
    
    let arrMonth = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
    let monthName = arrMonth[new Date().getMonth()];
    let arrWeekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let weekDay = arrWeekDays[new Date().getDay()];
    let year = date.getFullYear();

    hours.innerHTML = hrs;
    minutes.innerHTML = mins;
    seconds.innerHTML = secs;
    weekDays.innerHTML= dates;
    month.innerHTML = monthName;
    years.innerHTML = year;
    week.innerHTML = weekDay;
    am.innerHTML = hourDuplicate;
    pm.innerHTML = hourDuplicate;
}
setInterval(updateClock,1000)
