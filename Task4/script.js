"use strict";

function BuildTable(table) {
    table.innerHTML = "";
    for (let index = 0; index < orderList.length; index++) {
        let td = document.createElement('td');
        td.id = index + 1;
        td.addEventListener("click", e => {
            console.warn("Идентификатор столбца на который нажали: " + td.id);
            e.stopPropagation();
        });
        for (let key in orderList[index]) {
            let tr = document.createElement('tr');
            tr.addEventListener("click", () => {
                alert("Начинаем всплытие!");
            });
            tr.id = key;
            tr.style.height = '30px';
            tr.textContent = orderList[index][key] + " ";
            td.append(tr);
        }
        table.append(td);
    }
}

let orderList = [
    {name:"Kitkat", description:"Chocolate", cost:0, currency:"RU", size:0, weight:0, manufacturers_firm:"Firm 1", dateOfManufacture:"10.10.2020"}, 
    {name:"Twix", description:"Chocolate", cost:0, currency:"RU", size:0, weight:0, manufacturers_firm:"Firm 2", dateOfManufacture:"07.10.1999"},
    {name:"Mars", description:"Chocolate", cost:0, currency:"RU", size:0, weight:0, manufacturers_firm:"Firm 1", dateOfManufacture:"31.12.2019"}
];

let container = document.getElementById('orderContainer');
let table = document.createElement('table');
BuildTable(table);
container.append(table);