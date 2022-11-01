import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// // Makes sure that whaterver obj that is store inside doc implemts the interface
// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('yoshi', "web work", 1234);
// docTwo = new Payment('mario', "programming work", 1234);

// // makes sure that all objects inside array, implements the HasFormatter interface
// let docs: HasFormatter[] = []; 
// docs.push(docOne, docTwo);

// const invOne = new Invoice("mario", "work on the mario website", 1242);
// const invTwo = new Invoice("mario", "work on the luigi website", 12525);

// let invoices: Invoice[] = [];
// invoices.push(invOne, invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// });


// //! means there surely is an anchor tag
// const anchor = document.querySelector("a")!;

// // if(anchor){
// //     console.log(anchor?.href)
// // }
// console.log(anchor.href);


// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const logDetails = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); //prevents page refreshing when form is submit

    let doc: HasFormatter;
    
    if(type.value === 'invoice')
    {
        doc = new Invoice(toFrom.value, logDetails.value, amount.valueAsNumber);
    }
    else
    {
        doc = new Payment(toFrom.value, logDetails.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
});