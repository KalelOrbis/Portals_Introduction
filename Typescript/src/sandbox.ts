// //explicit types
// let character : string;
// let age : number;
// let isLoggedIn : boolean;


// let ninjas: string[] = [];

// ninjas.push("adf", "akdjf");

// //union types
// let mixed: (string|number|boolean)[] = [];
// mixed.push('hello');
// mixed.push(30);
// mixed.push(false);
// console.log(mixed);

// let uId: string|number;
// uId = '123';
// uId = 123;

// // objects 
// let ninjaOne: object;
// ninjaOne = {name: "Yoshi", age: 1};

// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColour: string
// };

// ninjaTwo = {
//     name : "mario",
//     age: 20,
//     beltColour: "black"
// };

// let mixedTwo: any[]=[];
// mixed.push(5);
// mixed.push("mario");
// mixed.push(false);
// console.log(mixed);

// let ninja: {name: any, age: any};

// ninja = {name: 'yoshi', age: 20};
// console.log(ninja);

// ninja = {name: 25, age: "Yoshi"};
// console.log(ninja);

// let greet: Function = () => {
//     console.log('hello world');
// }

// // greet = 'hello';

// // ? makes parameters optional
// const add = (a: number, b: number, c: number | string = 10) : void => {
//     console.log(a + b);
//     console.log(c);
// }

// add(123,4123,20);

// const minus = (a: number, b: number) : number => {
//     return a - b;
// }

// let result = minus(10,3);

// type StringOrnUm = string | number;
// type objWithName = { name: string, uId: StringOrnUm}

// const logDetails = (uId: StringOrnUm, item: string) => {
//     console.log(`${item} has uId of ${uId}`);
// }
// const doGreet = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
// }


// let greet: Function;

let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

let calc: (a: number, b:number, c: string ) => number;
calc = (numOne: number, numTwo: number, action: string) => {
    if (action === "add") {
        return numOne + numTwo;
        
    }
    else
    {
        return numOne - numTwo;
    }
}

type person = {name: string, age: number}

// let logDetails: ( obj: {name: string, age: number}) => void;
// logDetails = (ninja: person) => {
//     console.log(`${ninja.name} is ${ninja.age} years old`);
// }