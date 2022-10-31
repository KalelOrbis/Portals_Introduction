interface IsPerson{
    name: string;
    age: number;
    speak(a: string): void;
    spend(a:number): number;
}

const me: IsPerson = {
    name: 'kalel',
    age: 18,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number) : number {
        console.log('I spent', amount);
        return amount;
    }
};

let greetPerson = (person: IsPerson) => {
    console.log('hello', person.name);
}

greetPerson(me);

console.log(me);

import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice("mario", "work on the mario website", 1242);
const invTwo = new Invoice("mario", "work on the luigi website", 12525);

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});


//! means there surely is an anchor tag
const anchor = document.querySelector("a")!;

// if(anchor){
//     console.log(anchor?.href)
// }
console.log(anchor.href);


// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const logDetails = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); //prevents page refreshing when form is submit

    console.log(
        type.value,
        toFrom.value,
        logDetails.value,
        amount.valueAsNumber
    )
});