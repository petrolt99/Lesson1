"use strict";

function GetWithoutParameters() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            let xhr = new XMLHttpRequest();
            let url = new URL('http://45.67.59.109:2001/orders');
            xhr.open('GET', url);
            xhr.send();
            xhr.onload = () => {
                if (xhr.status != 200) {
                    alert('Ошибка');
                } else {
                    //orderList = JSON.parse(xhr.response);
                    //console.log(orderList);
                    //resolve(orderList);
                    orderList = JSON.parse(xhr.response);
                    let container = document.getElementById('orderContainer');
                    let table = document.createElement('table');
                    BuildTable(table);
                    container.append(table);
                    BuildGetTable(table);
                    container.append(table);
                    let lengthCountObj = countObj(orderList[0]);
                }
            };
        }, 1000);
    })
}

function GetWithParameters(index) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            let xhr = new XMLHttpRequest();
            let url = new URL('http://45.67.59.109:2001/order');
            url.searchParams.set("id", "order1");
            xhr.open('GET', url);
            xhr.send();
            xhr.onload = function() {
                if (xhr.status != 200) {
                    alert('Ошибка');
                    //resolve(xhr.response);
                } else {
                    //console.log(JSON.parse(xhr.response));;
                    //reject(xhr.response);
                    let answer = JSON.parse(xhr.response);
                        console.log(answer);
                        let showinfo = document.getElementById("temp");
                        let tempcontainer = document.getElementById('orderContainer');
                        showinfo.innerText = "Название: " + orderList[index].name + "\n" +
                        "Описание: " + orderList[index].description + "\n" +
                        "Стоимость: " + orderList[index].amount + " " + orderList[index].currency + "\n" +
                        "Фирма: " + orderList[index].manufacturer + "\n";
                        tempcontainer.style.display = 'none';
                        showinfo.style.display = 'block';
                        let buttonback = document.createElement('button');
                        buttonback.textContent = "Назад";
                        buttonback.addEventListener("click", function buttonbackClick() {
                            tempcontainer.style.display = 'block';
                            showinfo.style.display = 'none';
                            buttonback.removeEventListener("click", buttonbackClick);
                        });
                        showinfo.append(buttonback);
                        let buttonpay = document.createElement('button');
                        buttonpay.textContent = "Купить";
                        buttonpay.addEventListener("click", function buttonpayClick() {
                            PostWithParameters(orderList[index].id);
                        });
                        showinfo.append(buttonpay);
                }
            };
        }, 1000);
    })
}

function PostWithParameters(id_info) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            let xhr = new XMLHttpRequest();
            let url = new URL('http://45.67.59.109:2001/order/pay');
            //url.searchParams.set("id", "order2");
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
            xhr.send(JSON.stringify({
                id: id_info
              }));
            xhr.onload = function() {
                if (xhr.status != 200) {
                    alert('Ошибка');
                    //resolve(xhr.response);
                } else {
                    alert(xhr.response);
                    //reject(xhr.response);
                }
            };
        }, 1000);
    })
}

let orderList = [];
GetWithoutParameters();

//GetWithoutParameters()
//.then(GetWithParameters())
//.then(PostWithParameters());

function BuildTable(table) {
    table.innerHTML = "";
    for (let index = 0; index < orderList.length; index++) {
        let td = document.createElement('td');
        for (let key in orderList[index]) {
            let tr = document.createElement('tr');
            tr.style.height = '30px';
            tr.textContent = orderList[index][key] + " ";
            if (key === "name") {
                tr.addEventListener("click", function aclick() {
                    GetWithParameters(index);
                });
            }
            td.append(tr);
        }
        table.append(td);
    }
}

function BuildGetTable(table) {
    let gettd = document.createElement('td');
    gettd.id = "gettd";
    for (let key in orderList[0]) {
        let tr = document.createElement('tr');
        tr.style.height = '30px';
        let input = document.createElement('input');
        input.id = key;
        if (key == 'cost' || key == 'size' || key == 'weight') {
            input.type = "number";
        }
        else {
            input.type = "text";
        }
        tr.append(input);
        gettd.append(tr);
    }
    let tr = document.createElement('tr');
    let buttonget = document.createElement('button');
    buttonget.textContent = "Добавить";
    buttonget.addEventListener("click", function buttonClick() {
        let td = document.getElementById('gettd');
        let inputs = td.getElementsByTagName('input');
        let data = {};

        for (let index = 0; index < inputs.length; index++) {
            if (inputs[index].value === "") {
                data[inputs[index].id] = "-";
            }
            else {
                data[inputs[index].id] = inputs[index].value;
            }
        }
        orderList.push(data);
        gettd.remove();
        BuildTable(table);
        BuildGetTable(table);
        buttonget.removeEventListener("click", buttonClick);
    });
    tr.append(buttonget);
    gettd.append(tr);
    table.append(gettd);
}

function countObj(obj) {
    var length = 0;
    for (var key in obj) {
        length++;
    }
    
    return length;
}