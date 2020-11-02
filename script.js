"use strict";

let userFirstName = "Илья";
let userLastName = "Петриков";

let userBirthDay = prompt("Введите день вашего рождения:", "");
let userBirthMonth = prompt("Введите месяц вашего рождения:", "");
let userBirthYear = prompt("Введите год вашего рождения:", "");

let userAge = 2020 - userBirthYear;

alert("Сводка" + "\nФамилия: " + userLastName + 
                    "\nИмя: " + userFirstName + 
                    "\nДата рождения: " + userBirthDay + "." + userBirthMonth + "." + userBirthYear + 
                    "\nВозраст: " + userAge);