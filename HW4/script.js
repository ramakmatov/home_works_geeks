// Акматов Рамил ДЗ 4. 

//ДЗ-1 Переворот

function myReverse(str) {
  var reversedStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return reversedStr;
}

var inputString = "123456789";
var reversedString = myReverse(inputString);
console.log(reversedString);

//ДЗ-2 Полиндром

function checkPalindrome(str) {
  var reversedStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i);
  }
  return str === reversedStr;
}

console.log(checkPalindrome("потоп"));    // true
console.log(checkPalindrome("привет"));   // false
