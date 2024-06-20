var min = 0;
var sec = 0;
var mili = 0;
var interval;

var displayMin = document.getElementById("displayMin");
var displaySec = document.getElementById("displaySec");
var displayMili = document.getElementById("displayMili");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var resetBtn = document.getElementById("resetBtn");

function renderTimer() {
  displayMin.textContent = min < 10 ? "0" + min : min;
  displaySec.textContent = sec < 10 ? "0" + sec : sec;
  displayMili.textContent = mili < 10 ? "0" + mili : mili ;
}

function timer() {
  mili++;
  if (mili == 100) { 
    sec++;
    mili = 0;
    if (sec == 60) {
      min++;
      sec = 0;
    }
  }
  renderTimer();
}

function startTimer() {
  interval = setInterval(function () {
    timer();
  }, 10);
  startBtn.disabled = true;
}

function stopTimer() {
  clearInterval(interval);
  startBtn.disabled = false;
}

function resetTimer() {
  min = 0;
  sec = 0;
  mili = 0;  
  stopTimer();
  renderTimer();
}
renderTimer();
