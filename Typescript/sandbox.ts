//explicit types
let character : string;
let age : number;
let isLoggedIn : boolean;


let ninjas: string[] = [];

ninjas.push("adf", "akdjf");

//union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(30);
mixed.push(false);
console.log(mixed);

let uId: string|number;
uId = '123';
uId = 123;

// objects 
let ninjaOne: object;
ninjaOne = {name: "Yoshi", age: 1};

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
};

ninjaTwo = {
    name : "mario",
    age: 20,
    beltColour: "black"
};

let mixedTwo: any[]=[];
mixed.push(5);
mixed.push("mario");
mixed.push(false);
console.log(mixed);

let ninja: {name: any, age: any};

ninja = {name: 'yoshi', age: 20};
console.log(ninja);

ninja = {name: 25, age: "Yoshi"};
console.log(ninja);
