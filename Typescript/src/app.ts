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
    
    // tuple
    let values: [string, string, number];

    if(toFrom.value === "" || logDetails.value === "" || Number.isNaN(amount.valueAsNumber) )
    {
        return;
    }

    values = [toFrom.value, logDetails.value, amount.valueAsNumber];

    let doc: HasFormatter;

    
    
    if(type.value === 'Invoice')
    {
        // three dots spread out the items inside the values array into singular parameters
        // only works because the types are fix in the tuple
        doc = new Invoice(...values);
    }
    else
    {
        doc = new Payment(toFrom.value, logDetails.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
});


// DIDN'T COMPLETELY UNDERSTAND!!!
// Capture Item that is passed as parameter and capture it's properties if its an object
// only allows objects which have a name property
const addUID = <T extends {name: string}>(obj: T) => {
    let uId = Math.floor(Math.random() * 100);
    return {...obj,uId};
}

let docOne = addUID({name: 'yoshi', age: 50});
// let docTwo = addUID({name: ''});
console.log(docOne.age);

// ENUMS associate property with numeric value
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON, OTHER};

// generics with interfaces
interface Resource<T>{
    uId: number;
    resourceType: ResourceType;
    data: T;
}

const docThree: Resource<object> = {
    uId: 1,
    resourceType: ResourceType.BOOK,
    data: {date: "31/10/2022"}
}

const docFour: Resource<string[]> = {
    uId: 2, 
    resourceType: ResourceType.FILM,
    data: ["sdkjf","sdkjf","sldkgj"]
}

console.log(docThree, docFour);


// tuples fixate types of values stored like a row with columns 
let arr = ['ryu', 234, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [40, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 234, true];
tup[0] = 'ken';
tup[1] = 30;

let student: [string, number];
// student = [2432423, 'ken'];
student = ['chun-li', 1242];