"use strict";

console.log("Задание №1");

let order = {
  name: "KitKat",
  description: "Chocolate",
  cost: 250,
  currency: "RU",
  manufacturers_firm: "Nestle",
  dateOfManufacture: "18.01.2021"
};

let unfilledOrder = {
  description: "Pudding",
  cost: 100,
  currency: "RU"
};

function showInfo(object) {

  console.log(object);

  validate();

  let {
    name = "-",
    description = "-",
    cost = 0,
    currency = "RU",
    manufacturers_firm = "-",
    dateOfManufacture = "xx.xx.xxxx"
  } = object;

  console.log("Информация о заказе:\n"
    + "Наименование: " + name + "\n"
    + "Описание " + description + "\n"
    + "Стоимость " + cost + "\n"
    + "Валюта " + currency + "\n"
    + "Фирма производителя " + manufacturers_firm + "\n"
    + "Дата изготовления " + dateOfManufacture + "\n");

    function validate() {
      if (typeof(object.cost) !== "number" || object.cost < 0)
        throw "Стоимость не является числом или отрицательна!";
      for (let key in object) {
        if (!object[key]) {
          throw "Встречено пустое поле!";
        }
      }
    }
}

try {
  showInfo(order);
} catch (error) {
  console.warn(error);
}