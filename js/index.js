const timeElement =  document.getElementById("time");
const weekDaysHolder =  document.getElementById("weekDays");
const weekDays =  ['SUN','MON','TUE','WED','THU','FRI','SAT']
const h = document.getElementById("hour");
const m = document.getElementById("min");
const s = document.getElementById("sec");
const ap = document.getElementById("ap");

function getTime() {
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let mins = date.getMinutes();
    let sec  = date.getSeconds();
    let amPm = "AM";

    setActiveDay(day);

    if (hour >= 12){
        amPm = "PM";
    } else {
        amPm = "AM";
    }

    // convert 24 to 12
    if (hour == 0) {
        hour = 12;
    } else if (hour > 12 ) {
        hour = hour - 12;
    } else {
        hour = hour;
    }

    hour = addZeros(hour);
    mins = addZeros(mins);
    sec = addZeros(sec);
    
    let timeStr = hour + ":" + mins + ":" + sec + "  " + amPm;

    timeElement.innerText = timeStr;

    h.innerText=hour;
    m.innerText=mins;
    s.innerText=sec;
    ap.innerText=amPm;


    //console.log("Time : "+weekDays[day])


    setTimeout(getTime,1000);

    return timeStr;
}

function addZeros(val){
    let updated ="";
    if (val < 10) {
        updated = "0" + val;
    } else {
        updated = val;
    }
    return updated;

}

function setActiveDay(day){
    weekDaysHolder.innerHTML = ""
    let dayInText = weekDays[day]
    
    for( index in weekDays){
        let daySpan = document.createElement('span');
        daySpan.innerText = weekDays[index] + " ";
        daySpan.className="";

        if(day == index){
            daySpan.className = "active"
        }else{
            daySpan.className = "in-active"
        }
        weekDaysHolder.appendChild(daySpan);
        
    }
    return dayInText

}
console.log("main call : "+getTime())
console.log("main call  get day: "+setActiveDay(0))

module.exports = { getTime, setActiveDay }

/**
 * 
 * 
 * 
 * 








 */
// abdullah below
