"use strict";

let orderList = [
    {name:"Kitkat", description:"Chocolate", cost:0, currency:"RU", size:0, weight:0, manufacturers_firm:"Firm 1", dateOfManufacture:"10.10.2020"}, 
    {name:"Twix", description:"Chocolate", cost:0, currency:"RU", size:0, weight:0, manufacturers_firm:"Firm 2", dateOfManufacture:"07.10.1999"},
    {name:"Mars", description:"Chocolate", cost:0, currency:"RU", size:0, weight:0, manufacturers_firm:"Firm 1", dateOfManufacture:"31.12.2019"}
];

let container = document.getElementById('orderContainer');
let table = document.createElement('table');
for (let index = 0; index < orderList.length; index++) {
  let td = document.createElement('td');
  for (let key in orderList[index]) {
    let tr = document.createElement('tr');
    tr.id = key;
    tr.style.height = '30px';
    tr.textContent = orderList[index][key] + " ";
    td.append(tr);
  }
  table.append(td);
}

let lengthCountObj = countObj(orderList[0]);

let buttontd = document.createElement('td');
for (let key in orderList[0]) {
    let tr = document.createElement('tr');
    tr.style.height = '30px';
    let button = document.createElement('button');
    button.textContent = "Кнопка";
    button.size = 1;
    button.addEventListener("click", function buttonClick() {
        for (let index = 0; index < orderList.length; index++) {
            let tr = document.getElementById(key);
            tr.remove();
        }   
        button.removeEventListener("click", buttonClick);
        button.remove();
        tr.remove();
    });
    tr.append(button);
    buttontd.append(tr);
}
table.append(buttontd);
container.append(table);

function countObj(obj) {
    var length = 0;
    for (var key in obj) {
        length++;
    }
    return length;
}