import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  
  let step = Number(delayEl.value);

  for (let i = 1; i <= amountEl.value; i += 1) {
    if (i !== 1) {
      step += Number(stepEl.value);
  }
    createPromise(i, step);
  }
}

function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve();
      } else {
        reject();
      }
    }, delay)

  }).then(() => {
    Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  }).catch(() => {
    Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  })
}
