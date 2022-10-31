const me = {
    name: 'kalel',
    age: 18,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
let greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
console.log(me);
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice("mario", "work on the mario website", 1242);
const invTwo = new Invoice("mario", "work on the luigi website", 12525);
let invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
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
