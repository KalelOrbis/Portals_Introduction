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

})