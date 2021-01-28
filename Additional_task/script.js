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
                    orderList = JSON.parse(xhr.response);
                    console.log(orderList);
                    //resolve(orderList);
                }
            };
        }, 1000);
    })
}

function GetWithParameters() {
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
                    console.log(JSON.parse(xhr.response));;
                    //reject(xhr.response);
                }
            };
        }, 1000);
    })
}

function PostWithParameters() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            let xhr = new XMLHttpRequest();
            let url = new URL('http://45.67.59.109:2001/order/pay');
            url.searchParams.set("id", "order2");
            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
            xhr.send();
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
GetWithoutParameters()
.then(GetWithParameters())
.then(PostWithParameters());