const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateNumbers = () => {
  const numbersContainer = document.getElementById('numbers');
  numbersContainer.innerHTML = '';

  for (let i = 0; i < 6; i++) {
    const number = getRandomInt(1, 99);
    const numberElement = document.createElement('div');
    numberElement.className = 'number';
    numberElement.textContent = number;
    numbersContainer.appendChild(numberElement);
  }
};
