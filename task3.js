"use strict";

alert("Задание №3");
let number2 = prompt("Введите число:", "");

let getDigitsSum = (x) => {
  let length = x;
  let temp = 0;
  let result = 0;
  x = Number(x);
  
  for (let index = 0; index < length; index++) {
        temp = x % 10;
        result += temp;
        x = parseInt(x / 10);
  }

  return result;
}

let result = getDigitsSum(number2);
console.log(result);