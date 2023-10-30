let timerInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 10);
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    timerDisplay.textContent = '00:00:00';
}

function updateTimer() {
    milliseconds += 10;

    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    timerDisplay.textContent = formatTime(minutes) + ':' + formatTime(seconds) + ':' + formatTime(milliseconds / 10);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
