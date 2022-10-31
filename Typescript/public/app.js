"use strict";
//! means there surely is an anchor tag
const anchor = document.querySelector("a");
// if(anchor){
//     console.log(anchor?.href)
// }
console.log(anchor.href);
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const logDetails = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents page refreshing when form is submit
    console.log(type.value, toFrom.value, logDetails.value, amount.valueAsNumber);
});
