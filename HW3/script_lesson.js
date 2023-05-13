// var array = [123, 254, 54165, 46465, 1]

// for (var i = 0; i < array.length; i++) {
//   var number = String(array[i])[0]
//   if (number === '1' || number === '2' || number === '5') {
//     console.log(array[i])
//   }
// }

// Functions - Результат выполненных действий
// № Function declaration

// function ramil () {
//   return console.log(1+1)
// }

// ramil()

// №Function expression

// var ramil = function (string) {
//   return console.log(String)
// }

// ramil()

//стрелочная функция arrow function

// var sayHi = (a) => { //a- параметр

//   return console.log(a)
// }
// sayHi ('Hello') //Аргумент

//Lambda function функция котрая пишется в одну строку

// var pop = (str) => console.log(str)

// pop('JavaScript')

//Замыкание

// К переменным которые созданы внутри функции мы не имеем право
// Так как они становятся локальными переменными
// Локальные переменные значит что этот переменный доступен 
// только внутри той функции который был создан

// function init () {
//   var name = prompt()
//   var displayName = () => alert(name)
//   return displayName ()
// }

// init ()

// задание

// var data = +prompt('Введите аргумент: ');

// function getDataType(data) {
//   return console.log(typeof data);
// }

// getDataType(data);

// function getDataType(data) {
//   var dataType = typeof data;
//   console.log(dataType);
// }
// getDataType(data);

//HW1 

var data = function(getDataType) {
  return console.log(typeof getDataType)
}

data('Hello World!')
data(false)
data(42)

//HW2

function calculate(num1, operator, num2) {
  var result;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else {
    console.log('Такой оператор нет!');
    return;
  }

  console.log(result);
}

calculate(40, '+', 2);
calculate(52, '-', 12);
calculate(30, '*', 3);
calculate(23, '/', 10);

//HW3

function getPositionArrayElement(element, array) {
  var start = 0;
  var end = array.length - 1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);

    if (array[mid] === element) {
      return mid;
    } else if (array[mid] < element) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

var myArray = [1, 2, 4, 5, 7];
var element = 5;
var position = getPositionArrayElement(element, myArray);
console.log(position)

// var age = Number(prompt('Возраст'))

// var ageValidate = function (userAge) {
//   if (userAge > 18) {
//     alert('OK')
//   } else {
//     alert("NOT OK")
//   }
// }

// ageValidate(age)

// var userAge = +prompt('Возраст: ')

// if (userAge >= 18) {
//   function ageFunc () {
//     return alert('OK')
//   }
// } else {
//   function ageFunc () {
//     return alert('NOT OK')
//   }
// }

// ageFunc()

