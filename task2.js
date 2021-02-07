"use strict";

alert("Задание №2");
let number1 = prompt("Введите число:", "");

let isEven = (x) => {
    return x % 2 === 0;
}

console.log(isEven(Number(number1)));