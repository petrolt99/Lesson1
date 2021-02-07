"use strict";

function BuildTable(table) {
    table.innerHTML = "";
    for (let index = 0; index < orderList.length; index++) {
        let td = document.createElement('td');
        for (let key in orderList[index]) {
            let tr = document.createElement('tr');
            tr.style.height = '30px';ы
            if (key === "name") {
                tr.id = key;
                let a = document.createElement('a');
                a.innerText = orderList[index][key];
                a.addEventListener("click", function aclick() {
                    let showinfo = document.getElementById("temp");
                    showinfo.innerText = "Название: " + orderList[index].name + "\n" +
                    "Описание: " + orderList[index].description + "\n" +
                    "Стоимость: " + orderList[index].cost + " " + orderList[index].currency + "\n" +
                    "Размер: " + orderList[index].size + "\n" +
                    "Вес: " + orderList[index].weight + "\n" +
                    "Фирма производитель: " + orderList[index].manufacturers_firm + "\n" +
                    "Дата производства: " + orderList[index].dateOfManufacture + "\n";
                });
                a.style.textDecoration = 'none';
                a.style.color = "black";
                tr.append(a);
                td.append(tr);
            }
            else {
                tr.id = key;
                tr.textContent = orderList[index][key] + " ";
                td.append(tr);
            }
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