const countElement = document.getElementById('count');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');

let count = 0;

function updateCounter() {
  countElement.textContent = count;

  if (count > 0) {
    countElement.className = 'counter counter-positive';
  } else if (count < 0) {
    countElement.className = 'counter counter-negative';
  } else {
    countElement.className = 'counter counter-zero';
  }
}

function decrease() {
  count--;
  updateCounter();
}

function reset() {
  count = 0;
  updateCounter();
}

function increase() {
  count++;
  updateCounter();
}

decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);
increaseBtn.addEventListener('click', increase);

updateCounter();
