"use strict";

alert("Задание №2");
let number1 = prompt("Введите число:", "");

let isEven = (x) => {
    if (x % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(Number(number1)));