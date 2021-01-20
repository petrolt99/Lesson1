"use strict";

let orderList = [
    {name:"Kitkat", description:"Chocolate", cost:0, currency:"RU", size:0, weight:0, manufacturers_firm:"", dateOfManufacture:""}, 
    {name:"Twix", description:"Chocolate", cost:0, currency:"RU", size:0, weight:0, manufacturers_firm:"", dateOfManufacture:""},
    {name:"Mars", description:"Chocolate", cost:0, currency:"RU", size:0, weight:0, manufacturers_firm:"", dateOfManufacture:""}
];

// Деструктуризация массива объектов и одного из объектов
let [product1, product2, product3] = orderList;
let {
    name = "-",
    description = "-",
    cost = 0,
    currency = "RU",
    size = 0,
    weight = 0,
    manufacturers_firm = "-",
    dateOfManufacture = "-"
} = product1;

let container = document.getElementById('orderContainer');
let table = document.createElement('table');
for (let index = 0; index < orderList.length; index++) {
  let td = document.createElement('td');
  for (let key in orderList[index]) {
    let tr = document.createElement('tr');
    if (key === "name") {
      let a = document.createElement('a');
      a.innerHTML = orderList[index][key];
      a.href = "product.html?ID=" + index;
      a.style.color = 'black';
      a.style.textDecoration = 'none';
      tr.append(a);
      td.append(tr);
    }
    else {
      tr.innerHTML = orderList[index][key] + " ";
      td.append(tr);
    }
  }
  table.append(td);
}
container.append(table);