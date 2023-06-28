//Акматов Рамил.
//ДЗ6

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNumbers() {
  var numbersContainer = document.getElementById('numbers');
  numbersContainer.innerHTML = '';

  for (var i = 0; i < 6; i++) {
    var number = getRandomInt(1, 99);
    var numberElement = document.createElement('div');
    numberElement.className = 'number';
    numberElement.textContent = number;
    numbersContainer.appendChild(numberElement);
  }
}
