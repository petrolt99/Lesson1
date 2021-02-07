"use strict";

alert("Задание №1");
let input = prompt("Введите строку:", "");

let capitalise = (str) => {
  let temp = str.charAt(0).toUpperCase() + str.slice(1);

  return temp;
}

let output = capitalise(input);
console.log(output);