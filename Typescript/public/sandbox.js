"use strict";
//explicit types
let character;
let age;
let isLoggedIn;
let ninjas = [];
ninjas.push("adf", "akdjf");
//union types
let mixed = [];
mixed.push('hello');
mixed.push(30);
mixed.push(false);
console.log(mixed);
let uId;
uId = '123';
uId = 123;
// objects 
let ninjaOne;
ninjaOne = { name: "Yoshi", age: 1 };
let ninjaTwo;
ninjaTwo = {
    name: "mario",
    age: 20,
    beltColour: "black"
};
let mixedTwo = [];
mixed.push(5);
mixed.push("mario");
mixed.push(false);
console.log(mixed);
let ninja;
ninja = { name: 'yoshi', age: 20 };
console.log(ninja);
ninja = { name: 25, age: "Yoshi" };
console.log(ninja);
let greet = () => {
    console.log('hello world');
};
// greet = 'hello';
// ? makes parameters optional
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(123, 4123, 20);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 3);
