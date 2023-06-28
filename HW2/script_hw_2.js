// Akmatov Ramil F-27
//Lesson 2 HW-2

// #1 Светофор Вариант с if else

var color = prompt("Введите цвет светофора (красный, желтый или зеленый):");

if (color === "красный") {
  console.log("Стой!");
} else if (color === "желтый") {
  console.log("Жди!");
} else if (color === "зеленый") {
  console.log("Иди!");
} else {
  console.log("Некорректный цвет!");
}

// #1.2 Светофор Вариант с switch case

var color = prompt("Введите цвет светофора (красный, желтый или зеленый):");

switch (color) {
  case "красный":
    console.log("Стой!");
    break;
  case "желтый":
    console.log("Жди!");
    break;
  case "зеленый":
    console.log("Иди!");
    break;
  default:
    console.log("Некорректный цвет!");
    break;
}


// #2 Названии планеты вариант с if else 

var number = parseInt(prompt("Введите порядковый номер планеты:"));

if (number === 1) {
  console.log("Меркурий");
} else if (number === 2) {
  console.log("Венера");
} else if (number === 3) {
  console.log("Земля");
} else if (number === 4) {
  console.log("Марс");
} else if (number === 5) {
  console.log("Юпитер");
} else if (number === 6) {
  console.log("Сатурн");
} else if (number === 7) {
  console.log("Уран");
} else if (number === 8) {
  console.log("Нептун");
} else if (number === 9) {
  console.log("Плутон");
} else {
  console.log("Некорректный номер планеты!");
}


// #2.2 Названии планеты вариант с switch case

var number = parseInt(prompt("Введите порядковый номер планеты:"));

switch (number) {
  case 1:
    console.log("Меркурий");
    break;
  case 2:
    console.log("Венера");
    break;
  case 3:
    console.log("Земля");
    break;
  case 4:
    console.log("Марс");
    break;
  case 5:
    console.log("Юпитер");
    break;
  case 6:
    console.log("Сатурн");
    break;
  case 7:
    console.log("Уран");
    break;
  case 8:
    console.log("Нептун");
    break;
  case 9:
    console.log("Плутон");
    break;
  default:
    console.log("Некорректный номер планеты!");
    break;
}


// #3 2 числа

var number1 = parseFloat(prompt("Введите первое число:"));
var number2 = parseFloat(prompt("Введите второе число:"));

if (number1 > number2) {
  console.log("Первое число больше второго");
} else if (number1 < number2) {
  console.log("Второе число больше первого");
} else {
  console.log("Числа равны");
}

// #4 Тернарный оператор

var type = 2;
var personType = (type === 1) ? "Физическое лицо" : "Юридическое лицо";

console.log(personType);
