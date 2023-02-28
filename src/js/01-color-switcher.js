const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

let timerId = null;

function onStartBtnClick() {

    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function onStopBtnClick() {
    clearInterval(timerId);
    stopBtn.disabled = true;
    startBtn.disabled = false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
