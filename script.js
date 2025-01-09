const start = document.getElementById('start')
const stop = document.getElementById('stop')
const h = document.getElementById('hours')
const m = document.getElementById('mint')
const s = document.getElementById('sec')
const ms = document.getElementById('milliSec')
const record = document.getElementById('record')
const laps = document.getElementById('laps')
const clear = document.getElementById('clear')

let hours = 0;
let mint = 0;
let sec = 0;
let milliSec = 0;

let interval;

function startTimer(){
    clearInterval(interval);
    interval = setInterval(()=>{
        milliSec+=10;

        if(milliSec === 1000){
            milliSec = 0;
            sec++;   
        }
        if(sec === 60){
            sec = 0;
            mint++;
        }
        if(mint === 60){
            mint = 0;
            hours++;
        }
    
       h.innerText = hours<10 ? `0${hours}`: hours;
       m.innerText = mint<10 ? `0${mint}`: mint;
       s.innerText = sec<10 ? `0${sec}`: sec;
       ms.innerText = milliSec<100 ? `0${milliSec/10}`: milliSec/10;

    },10)
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    hours = 0;
    mint = 0;
    sec = 0;
    milliSec = 0;

    h.innerText = '0' + hours
    m.innerText = '0' + mint
    s.innerText = '0' + sec
    ms.innerText = '0' + milliSec

}

function recordLaps(){
    let currLap = `${h.innerText}:${m.innerText}:${s.innerText}:${ms.innerText}`;
    let li = document.createElement('li');
    li.innerText = currLap;
    laps.appendChild(li);
}


start.addEventListener('click',startTimer);
stop.addEventListener('click',stopTimer);
reset.addEventListener('click',resetTimer);
record.addEventListener('click',recordLaps)
clear.addEventListener('click',()=>{
    laps.innerText = ""
})