let hr = 0;
let min = 0;
let sec = 0;

let checkStop = true;

let stopWatch = document.querySelector("#stopwatchTimer");
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let rsetBtn = document.querySelector("#reset");

function start() {
  if (checkStop === true) {
    checkStop = false;
    timer();
  }
}

function timer() {
  if (checkStop === false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
    }
    if (min === 60) {
      min = 0;
      hr++;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }

    if (min < 10) {
      min = "0" + min;
    }

    if (hr < 10) {
      hr = "0" + hr;
    }
    stopWatch.innerHTML = `${hr} : ${min} : ${sec}`;
    setTimeout("timer()", 1000);
  }
}

function stop() {
  checkStop = true;
}

function reset() {
  checkStop = true;
  sec = 0;
  min = 0;
  hr = 0;

  stopWatch.innerHTML = "00 : 00 : 00";
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
rsetBtn.addEventListener("click", reset);
