import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
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
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const logDetails = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents page refreshing when form is submit
    // tuple
    let values;
    values = [toFrom.value, logDetails.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        // three dots spread out the items inside the values array into singular parameters
        // only works because the types are fix in the tuple
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(toFrom.value, logDetails.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// DIDN'T COMPLETELY UNDERSTAND!!!
// Capture Item that is passed as parameter and capture it's properties if its an object
// only allows objects which have a name property
const addUID = (obj) => {
    let uId = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uId });
};
let docOne = addUID({ name: 'yoshi', age: 50 });
// let docTwo = addUID({name: ''});
console.log(docOne.age);
// ENUMS associate property with numeric value
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
    ResourceType[ResourceType["OTHER"] = 5] = "OTHER";
})(ResourceType || (ResourceType = {}));
;
const docThree = {
    uId: 1,
    resourceType: ResourceType.BOOK,
    data: { date: "31/10/2022" }
};
const docFour = {
    uId: 2,
    resourceType: ResourceType.FILM,
    data: ["sdkjf", "sdkjf", "sldkgj"]
};
console.log(docThree, docFour);
// tuples fixate types of values stored like a row with columns 
let arr = ['ryu', 234, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [40, false, 'yoshi'];
let tup = ['ryu', 234, true];
tup[0] = 'ken';
tup[1] = 30;
let student;
// student = [2432423, 'ken'];
student = ['chun-li', 1242];
