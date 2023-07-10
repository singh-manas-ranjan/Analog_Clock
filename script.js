const clock = document.getElementById('clock');

function setHourNumbersRotation(){
    const allHourNumbers = document.querySelectorAll('[data-hour-number]');
    allHourNumbers.forEach((hour,index)=>{
        hour.style.setProperty('--rotation', (index+1) * 30);
    });
}

function renderSecondsMark(){
    const temp = document.getElementById('seconds-mark-template');
    for(let i=0; i<60; i++){
        const tempClone = temp.content.cloneNode(true).firstElementChild;
        clock.appendChild(tempClone);
    }
}


function setAllSecondsMarkRotation(){
    const allSecondMarks = document.querySelectorAll('[data-second-mark]');
    allSecondMarks.forEach((second,index)=>{
        second.style.setProperty('--rotation', index * 6);
    })
}

setHourNumbersRotation();
renderSecondsMark();
setAllSecondsMarkRotation();

setInterval(setClock, 1000);

function setClock(){
    const secondHand = document.querySelector('[data-second-hand]');
    const minuteHand = document.querySelector('[data-minute-hand]');
    const hourHand = document.querySelector('[data-hour-hand]');
    const date = new Date();
    const secondsRotation = date.getSeconds() / 60;
    const minutesRotation = (secondsRotation + date.getMinutes()) / 60;
    const hoursRotation = (minutesRotation + date.getHours()) / 12;

    setTime(secondHand, secondsRotation);
    setTime(minuteHand, minutesRotation);
    setTime(hourHand, hoursRotation);
}

function setTime(element, rotation){
    element.style.setProperty('--rotation', rotation * 360);
}

setClock();

