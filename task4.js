"use strict";

alert("Задание №4");

let numberСheck = (arg, range, callback1, callback2, callback3) => {
    if (arg === range) {
        callback1("Поздравляю! Число " + range + " отгадано");
    }
    if (arg > range) {
        callback2("Загаданное число меньше введённого");
    }

    else if (arg < range) {
        callback3("Загаданное число больше введённого");
    }
}

let Games = () => {
    let attempts = prompt("Введите количество попыток:", "");
    attempts = Number(attempts);
    let range = Math.floor(Math.random() * (10 - 1) + 1);
    
    do {
        let attempt = prompt("Введите число в диапазоне от 1 до 10 (попыток: " + attempts + "):", "");
        attempt = Number(attempt);

        let finish = false;
        numberСheck(attempt, range, 

            function (str) {
                alert(str);
                finish = true;
            },

            function (str) {
                alert(str);
                finish = false;
            },

            function (str) {
                alert(str);
                finish = false;
            });

        if (finish) {
            break;
        }
        else {
            attempts--;
        }

    } while (attempts !== 0)
}

Games();