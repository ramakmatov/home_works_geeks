// Akmatov Ramil F-26
//Lesson 2 HW-2

// #1

var arrs = [10, 20, 30, 50, 235, 3000, 5000439857];
var numbers = [];

for (var i = 0; i < arrs.length; i++) {
  var numString = String(arrs[i]);
  var firstNum = numString.charAt(0);

  if (firstNum === '1' || firstNum === '2' || firstNum === '5') {
    numbers.push(arrs[i]);
  }
}

console.log(numbers);

// #2

var numbers = 20;

while (numbers >= 0){
    console.log(numbers);
    numbers--;
}

// #3

var light = prompt('Введите цвет светофора:', '');

var trafficLight = {
  red: 'Красный',
  green: 'Зеленый',
  yellow: 'Желтый'
};

if (light === trafficLight.red) {
  alert('Движение транспорта запрещено!');
} else if (light === trafficLight.green) {
  alert('Движение транспорта разрешено!');
} else if (light === trafficLight.yellow) {
  alert('Приготовиться к движению!');
} else {
  alert('Ошибка! Попробуйте ввести цвета светофора!');
}

// switch (light) {
//     case (trafficLight.red):
//         alert('Движение транспорта запрещено!');
//         break;
//     case (trafficLight.green):
//         alert('Движение транспорта разрешено!');
//         break;
//     case (trafficLight.yellow):
//         alert('Приготовиться к движению!');
//         break;
//     default:
//         alert('Ошибка! Попробуйте ввести цвета светофора!');
// }

// #4

var arr = [];

for (var i = 0; i <= 10; i++) {
    arr.push(i);
    //console.log(arr)
}
console.log(arr);