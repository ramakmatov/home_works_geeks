// Акматов Рамил F-27
//ДЗ 3

//ДЗ 1. Температура 

var temperatures = [25, 12, -2, 39, 0, 14, -10];

for (var i = 0; i < temperatures.length; i++) {
  var temperature = temperatures[i];
  var feeling;

  if (temperature >= 33) {
    feeling = "Жарко";
  } else if (temperature >= 26 && temperature <= 32) {
    feeling = "Тепло";
  } else if (temperature >= 21 && temperature <= 25) {
    feeling = "Облачно";
  } else if (temperature >= 11 && temperature <= 20) {
    feeling = "Прохладно";
  } else if (temperature >= 0 && temperature <= 10) {
    feeling = "Холодно";
  } else if (temperature >= -10 && temperature < 0) {
    feeling = "Очень холодно";
  } else {
    feeling = "Морозно";
  }

  console.log("Температура: " + temperature + "°C, ощущение: " + feeling);
}


//ДЗ 2. Сколько платежных карт

var cardNumbers = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"];
var visaCount = 0;

for (var i = 0; i < cardNumbers.length; i++) {
  if (cardNumbers[i].startsWith("4")) {
    visaCount++;
  }
}

console.log("Карт VISA " + visaCount + " из " + cardNumbers.length + ".");


//ДЗ 3. ИНН клиента

var innList = ["12102199501457", "2220219950151", "02102199501457"];
var individualInnList = [];
var legalInnList = [];

for (var i = 0; i < innList.length; i++) {
  var inn = innList[i];
  
  if (inn.startsWith("1") || inn.startsWith("2")) {
    individualInnList.push(inn);
  } else if (inn.startsWith("0")) {
    legalInnList.push(inn);
  }
}

console.log("Массив физических лиц: ", individualInnList);
console.log("Массив юридических лиц: ", legalInnList);


