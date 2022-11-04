"use strict";
const txtEntry = document.querySelector("#txtEntry");
const txtMainCourse = document.querySelector("#txtMainCourse");
const txtDessert = document.querySelector("#txtDessert");
const ulOrdersList = document.querySelector("#orderList");
let orderArray = [];
const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", add);
const btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", clearList);
window.onload = function readLocalstorage() {
    ulOrdersList.innerHTML = "";
    var history = JSON.parse(localStorage.getItem("orderArray") || "");
    console.log(history);
    for (var h of history) {
        addJSONObjectsToList(h);
        console.log("onload function" + history.indexOf(h));
        orderArray.push(h);
    }
};
function read() {
    ulOrdersList.innerHTML = "";
    var menuList = JSON.parse(localStorage.getItem("orderArray") || "");
    for (var m of menuList) {
        addJSONObjectsToList(m);
        console.log(`Read Function: ${menuList.indexOf(m)}`);
    }
}
function add() {
    var actualDate = new Date();
    var key = "menu_" + actualDate.getTime();
    var sEntry = txtEntry.value;
    var sMainCourse = txtMainCourse.value;
    var sDessert = txtDessert.value;
    if (sEntry == "" || sMainCourse == "" || sDessert == "") {
        return;
    }
    var menu = new Menu(key, sEntry, sMainCourse, sDessert);
    orderArray.push(menu.getMenuSeparated());
    localStorage.setItem("orderArray", JSON.stringify(orderArray));
    read();
}
;
function addJSONObjectsToList(item) {
    var listItems = document.createElement("li");
    var menuItems = item.split(";");
    listItems.addEventListener("click", function () {
        let itemIndex = orderArray.indexOf(item);
        listItems.remove();
        orderArray.splice(itemIndex, 1);
        localStorage.setItem("orderArray", JSON.stringify(orderArray));
        console.log(itemIndex);
        console.log(orderArray);
        console.log("================");
        console.log(localStorage.getItem("orderArray"));
    });
    listItems.innerHTML = "<b>Entry:</b> " + menuItems[1] + " <b>Main Course:</b> " + menuItems[2] + " <b>Dessert:</b>" + menuItems[3];
    ulOrdersList.appendChild(listItems);
}
;
function clearList() {
    window.localStorage.clear();
    orderArray = [];
    ulOrdersList.innerHTML = "";
}
