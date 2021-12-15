const today = new Date().toISOString().split('T')[0];
const inputContainer = document.getElementById('input-container');
const countdownComplete = document.getElementById('countdown-complete');
const countdownForm = document.getElementById('form'); 
const date = document.getElementById('date'); 
date.setAttribute('min', today);

const countdownContainer = document.getElementById('countdown-container');
const countdownEl = document.getElementById('countdown');
const countdownbtn = document.getElementById('countdown-btn');
const countdownElTitle = document.getElementById('countdown-title');
const timeRemaining = document.querySelectorAll('span');
let countdownActive ; 

const completeEl = document.getElementById('countdown-complete');
const completeTitle = document.getElementById('complete-info');
const completebtn = document.getElementById('complete-btn');


let countdownTitle = '';
let countdownValue = '';
const sec = 1000;
const min = sec*60;
const hr =  min*60;
const day =  hr*24;
const month =  day*30;
const yr =  month*365;



function updateDOM() {
    countdownActive = setInterval(()=>{
        const now = new Date().getTime();
        rem = countdownValue-now;
        console.log(rem);


        const days = Math.floor(rem/day);
        const hrs = Math.floor((rem%day)/ hr);
        const mins = Math.floor((rem%hr)/min);
        const secs = Math.floor((rem%min)/sec);

        if (rem < 0) {
            clearInterval(countdownActive);
            completeTitle.textContent = `${countdownTitle} finished countdown`;
            completeEl.hidden = false;
            inputContainer.hidden = true;

        } else {
            countdownElTitle.textContent = `${countdownTitle}`;
            timeRemaining[0].textContent = `${days}`;
            timeRemaining[1].textContent = `${hrs}`;
            timeRemaining[2].textContent = `${mins}`;
            timeRemaining[3].textContent = `${secs}`;

            inputContainer.hidden = true;
            countdownContainer.hidden = false;
        }
    },1000)
}

function updateCountDown(e) {
    e.preventDefault();

    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value
    countdownValue = new Date(countdownDate).getTime();
    updateDOM()

}

function reset() {
    inputContainer.hidden = false;
    countdownContainer.hidden = true;

    clearInterval(countdownActive);

    countdownTitle = '';
    countdownValue = '';
}

// let d = new Date();
// let t = d.getTime();
// let y = t/(1000*60*60*24*365);


countdownForm.addEventListener('submit', updateCountDown)
countdownbtn.addEventListener('click', reset)

