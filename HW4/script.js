//ДЗ-1

// var counterElement = document.getElementById('counter');
// var incrementBtn = document.querySelector('#incrementBtn');
// var decrementBtn = document.querySelector('#decrementBtn');

// var counterValue = 0;

// function updateCounter() {
//   counterElement.textContent = counterValue;

//   counterElement.classList.remove('green', 'red');
//   if (counterValue > 0) {
//     counterElement.classList.add('green');
//   } else if (counterValue < 0) {
//     counterElement.classList.add('red');
//   }
// }
// function increment() {
//   counterValue++;
//   updateCounter();
// }
// function decrement() {
//   if (counterValue > 0) {
//     counterValue--;
//     updateCounter();
//   }
// }
// incrementBtn.addEventListener('click', increment);
// decrementBtn.addEventListener('click', decrement);

//ДЗ-2

// var textElements = document.getElementsByClassName('text');
// var btnElements = document.getElementsByClassName('btn');

// function updateText() {
//   var inputValue = prompt('Введите текст');
//   if (inputValue !== null) {
//     Array.from(textElements).forEach(function(element) {
//       element.textContent = inputValue;
//     });
//   }
// }

// function handleClick() {
//   updateText();
// }

// Array.from(btnElements).forEach(function(element) {
//   element.addEventListener('click', handleClick);
// });

//ДЗ-3

var lights = document.getElementsByClassName('light');

function updateTrafficLight(color) {
  Array.from(lights).forEach(function(light) {
    light.classList.remove('red', 'yellow', 'green');
  });

  if (color === 'Красный') {
    lights[0].classList.add('red');
    alert('STOP');
  } else if (color === 'Зеленый') {
    lights[2].classList.add('green');
    alert('GO');
  }
}

function handleClick() {
  var inputValue = prompt('Введите цвет светофора: "Красный" или "Зеленый"');
  if (inputValue !== null) {
    updateTrafficLight(inputValue);
  }
}

window.addEventListener('DOMContentLoaded', function() {
  handleClick();
});