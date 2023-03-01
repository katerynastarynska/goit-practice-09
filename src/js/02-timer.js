import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputDate = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('.value[data-days]');
const hoursEl = document.querySelector('.value[data-hours]');
const minutesEl = document.querySelector('.value[data-minutes]');
const secondsEl = document.querySelector('.value[data-seconds]');

const timerEl = document.querySelector('.timer');
const timerField = document.querySelectorAll('.field');
const timerLabel = document.querySelectorAll('.label');

let timerId = null;

startBtn.disabled = true;

timerInterface()

function timerInterface() {
    timerEl.style.display = "flex";
    timerEl.style.fontSize = "40px";
    timerEl.style.fontWeight = "500";
    timerEl.style.color = "#0f6cb8";
    timerEl.style.textAlign = "center";
    timerEl.style.flexBasis = "calc(100 % / 4)";

    timerField.forEach(field => {
        field.style.display = "flex";
        field.style.flexDirection = "column";
        field.style.flexWrap = "wrap";
        field.style.marginRight = "40px";
    })
    timerLabel.forEach(label => {
        label.style.fontSize = "24px";
    })
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: Date.now(),
    minuteIncrement: 1,
    onClose,
};

function onClose(selectedDates) {

    if (selectedDates[0] > Date.now()) {
        startBtn.disabled = false;
        startBtn.addEventListener('click', () => {
            timerId = setInterval(() => {
                const deltaTime = selectedDates[0] - Date.now();
                updateTimer(convertMs(deltaTime));
                startBtn.disabled = true;

                if (deltaTime < 1000) {
                    clearInterval(timerId);
                }
            }, 1000);
        })
    } else {
        startBtn.disabled = true;
        Notiflix.Notify.failure('Please choose a date in the future');
    }
}

flatpickr(inputDate, options);

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0')
}

function updateTimer({ days, hours, minutes, seconds }) {
    daysEl.textContent = `${days}`;
    hoursEl.textContent = `${hours}`;
    minutesEl.textContent = `${minutes}`;
    secondsEl.textContent = `${seconds}`;
}