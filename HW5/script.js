//Акматов Рамил 
// ДЗ 1

var count = 0;
var countElement = document.getElementById('count');

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

updateCounter();
